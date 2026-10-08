from flask import Blueprint, request, jsonify
from extensions import db
from decimal import Decimal, InvalidOperation
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

    # delivery fee logic
    delivery_fee = (
        Decimal("3.99")
        if data["order_type"] == "delivery"
        else Decimal("0.00")
    )

    # tip cannot remain "0.00" - use InvalidOperation from the decimal module (a Python exception)
    # read + validate the tip sent by Checkout
    try:
        tip = Decimal(str(data.get("tip", 0)))

    except(InvalidOperation, ValueError, TypeError):
        return jsonify({"error": "Tip amount must be a valid amount."}), 400

    if not tip.is_finite() or tip < 0:
        return jsonify({"error": "Tip amount must be a non-negative, finite number."}), 400

    tip = tip.quantize(Decimal("0.01")) # specify number of decimal places

    # discount cannot remain "0.00"
    coupon_code = data.get("coupon_code")

    if coupon_code is None:
        coupon_code = ""

    coupon_code = coupon_code.strip().upper()
    
    discount = Decimal("0.00")

    if coupon_code == "PAUHANA5":
        discount = Decimal("5.00")
    elif coupon_code == "ALOHA10":
        discount = subtotal * Decimal("0.10")
    elif coupon_code:
        return jsonify({"error": "Invalid coupon code"}), 400

    discount = min(discount, subtotal).quantize(Decimal("0.01"))

    discounted_subtotal = subtotal - discount

    tax = (discounted_subtotal * Decimal("0.08")).quantize(Decimal("0.01"))

    total = subtotal - discount + tax + tip + delivery_fee

    try: 
        order = Order(
            order_type=data["order_type"],
            order_status="received",
            subtotal=subtotal,
            discount=discount,
            delivery_fee=delivery_fee,
            tax=tax,
            tip=tip,
            total=total,
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
                menu_item_id=menu_item.id,
                name=menu_item.name,
                price=menu_item.price,
                quantity=quantity
            )

            db.session.add(order_item)

        db.session.commit()

        return jsonify({
            "message": "Order validated successfully",
            "order": order.to_dict(),
        }), 201 

    except Exception:
        db.session.rollback()
        return jsonify({"error": "Could not create the order"}), 500

# get a specific order
@order_bp.route("/<int:id>", methods=["GET"])
def get_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    return jsonify(order.to_dict()), 200

# get list of orders
@order_bp.route("", methods=["GET"])
def get_orders_list():

    page = max(request.args.get("page", 1, type=int), 1)
    per_page = max(
        1,
        min(request.args.get("per_page", 10, type=int), 100) # limit is slightly inconsistent
    )

    # pagination order
    pagination = (
        Order.query
        .order_by(Order.created_at.desc(), Order.id.desc())
        .paginate(page=page, per_page=per_page, error_out=False)
    )

    return jsonify({
        "orders": [order.to_dict() for order in pagination.items],
        "page": pagination.page,
        "per_page": pagination.per_page,
        "total": pagination.total,
        "pages": pagination.pages,
        "has_next": pagination.has_next,
        "has_prev": pagination.has_prev
    }), 200

# PATCH route to update order status
@order_bp.route("/<int:id>", methods=["PATCH"])
def update_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    data = request.get_json() or {}

    if not data:
        return jsonify({"message": "Data not found"}), 400

    status = data.get("order_status")

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
        return jsonify({"error": "Invalid order status"}), 400

    try:
        order.order_status = status

        db.session.commit()

        return jsonify({
            "message": "Order updated successfully",
            "order": order.to_dict()
        }), 200

    except Exception:
        db.session.rollback()
        return jsonify({"error": "Could not update order"}), 500

# DELETE route
@order_bp.route("/<int:id>", methods=["DELETE"])
def delete_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    try:
        db.session.delete(order)
        db.session.commit()

        return "", 204

    except Exception:
        db.session.rollback()
        return jsonify({"error": "Could not delete the order."}), 500