from extensions import db
from datetime import datetime 

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id", nullable=False))

    order_type = db.Column(db.String(25), nullable=False)
    order_items = db.Column(db.Integer, nullable=False)
    subtotal = db.Column(db.Integer, nullable=False)
    discount = db.Column(db.Integer, nullable=False)
    tax = db.Column(db.Integer, nullable=False)
    tip = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)

    customer_name = db.Column(db.String(150), nullable=False)
    customer_email = db.Column(db.String(100), nullable=False)
    customer_phone_number = db.Column()
    delivery_address = db.Column(db.Text, nullable=False)

    created_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "order_type": self.order_type,
            "order_items": self.order_items,
            "subtotal": self.subtotal,
            "discount": self.discount,
            "tax": self.tax,
            "tip": self.tip,
            "total" : self.total,
            "customer_name": self.customer_name,
            "customer_email": self.customer_email,
            "customer_phone_number": self.customer_phone_number,
            "delivery_address": self.delivery_address,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }