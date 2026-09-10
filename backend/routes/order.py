from flask import Blueprint, request, jsonify
from extensions import db
from models.order import Order
from models.order_item import OrderItem
from models.menu_item import MenuItem

order_bp = Blueprint("orders", __name__, url_prefix='/api/orders')

@order_bp.route("", methods=["POST"])
def create_order():
    data = request.get_json() or {}

    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    # validation
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

    menu_items = data["menu_items"]

    if not menu_items:
        return jsonify({
            "error": "Order must have at least one menu item."
        }), 400
    
    return jsonify({
        "message": "Order created successfully",
        "data": data
    }), 200    

# get a specific order
@order_bp.route("/<int:id>", methods=["GET"])
def get_order(id):
    order = Order.query.filter_by(id=id)

    if not order:
        return jsonify({"message": "Order not found"}), 400

    return jsonify(order.to_dict()), 200

# get list of orders
@order_bp.route("", methods=["GET"])
def get_orders_list():
    orders = Order.query.all()

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
        return jsonify({"Order status unknown"}), 400
    
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

    return jsonify(order.to_dict()), 200

# DELETE route
@order_bp.route("/<int:id>", methods=["DELETE"])
def delete_order(id):
    order = Order.query.filter_by(id=id).first_or_404()

    db.session.delete(order)
    db.session.commit()

    return "", 204