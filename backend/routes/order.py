from flask import Blueprint, request, jsonify
from extensions import db

order_bp = Blueprint("orders", __name__, url_prefix='/api/orders')

@order_bp.route("", methods=["POST"])
def create_order():
    data = request.get_json() or {}

    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    required_fields = [
        "order_type",
        "customer_name",
        "customer_email",
        "customer_phone_number",
        "menu_items"
    ]

    for field in required_fields:
        if field not in data or data[field] == "":
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