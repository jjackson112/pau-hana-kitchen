from flask import Blueprint, request, jsonify
from extensions import db
from decimal import Decimal
from models.order import Order
from models.order_item import OrderItem
from models.menu_item import MenuItem

order_bp = Blueprint("orders", __name__, url_prefix='/api/orders')

@order_bp.route("", methods=["POST"])
def create_order():
    data = request.get_json() or {}

    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    # validated fields
    required_fields = [
        "order_type",
        "customer_name",
        "customer_email",
        "customer_phone_number",
        "menu_items"
    ]

    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400 

    # raw data
    menu_items = data["menu_items"]

    # use isinstance() to validate menu_items + quantity more carefully
    if not isinstance(menu_items, list) or len(menu_items) == 0:
        return jsonify({"error": "menu_items cannot be empty"}), 400

    # validated data
    validated_items = []
    subtotal = Decimal("0.00")

    # query MenuItem - validate each requested menu item against the db
    # loop through MenuItems + reject bad IDs, etc + find relevant fields (name, price) + create Order then OrderItem rows
    for item in menu_items:
        menu_item_id = item.get("menu_item_id")
        quantity = item.get("quantity")

        if menu_item_id is None:
            return jsonify({"error": "Each menu item requires the menu item id and quantity"}), 400

        if not isinstance(quantity, int) or quantity < 1:
            return jsonify({"error": "Quantity must be a positive number"}), 400

        menu_item = db.session.get(MenuItem, menu_item_id)

        if menu_item is None:
            return jsonify({"error": f"Menu item {menu_item_id} not found."}), 404

        subtotal += menu_item.price * quantity

        # append validated items - menu_items is raw data (actual db record)
        validated_items.append({
            "menu_item": menu_item,
            "quantity": quantity
        })


    try: 
        order = Order(
            order_type=data["order_type"],
            order_status="received",
            subtotal=subtotal,
            discount=Decimal("0.00"),
            tax=subtotal * Decimal("0.08"),
            tip=Decimal("0.00"),
            total=subtotal + (subtotal * Decimal("0.08")),
            customer_name=data["customer_name"],
            customer_email=data["customer_email"],
            customer_phone_number=data["customer_phone_number"],
            delivery_address=data.get("delivery_address"),
        )

        db.session.add(order)
        db.session.flush()

        # validate incoming values
        for item in validated_items:
            menu_item = item["menu_item"]
            quantity = item["quantity"]

            order_item = OrderItem(
                order_id=order.id,
                menu_item_id=menu_item_id,
                name=menu_item.name,
                price=menu_item.price,
                quantity=quantity
            )

            db.session.add(order_item)

        db.session.commit()

        return jsonify({
            "message": "Order validated successfully",
            "subtotal": subtotal
        }), 200    

    except Exception:
        db.session.rollback()
        return jsonify({"error", "Could not create the order"}), 500

# get a specific order
@order_bp.route("/<int:id>", methods=["GET"])
def get_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    return jsonify(order.to_dict()), 200

# get list of orders
@order_bp.route("", methods=["GET"])
def get_orders_list():
    orders = Order.query.order_by(Order.created_at.desc()).all()

    return jsonify([order.to_dict() for order in orders]), 200

# PATCH route to update order status
@order_bp.route("/<int:id>", methods=["PATCH"])
def update_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    data = request.get_json() or {}

    if not data:
        return jsonify({"message": "Data not found"}), 400

    status = data.get("status")

    if not status:
        return jsonify({"error": "Order status unknown"}), 400
    
    allowed_statuses = [
        "received",
        "preparing",
        "ready",
        "completed",
        "cancelled"
    ]

    if status not in allowed_statuses:
        return jsonify({"error", "Invalid order status"}), 400

    order.status = status

    db.session.commit()

    return jsonify(order.to_dict()), 200

# DELETE route
@order_bp.route("/<int:id>", methods=["DELETE"])
def delete_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    db.session.delete(order)
    db.session.commit()

    return "", 204