from extensions import db
from datetime import datetime 

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id", nullable=False))

    order_type = db.Column()
    order_items = db.Column()
    subtotal = db.Column()
    discount = db.Column()
    tax = db.Column()
    tip = db.Column()
    total = db.Column()

    customer_name = db.Column()
    customer_email = db.Column()
    customer_phone_number = db.Column()
    delivery_address = db.Column()

    created_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)