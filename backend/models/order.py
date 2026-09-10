from extensions import db
from datetime import datetime 

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("user.id", nullable=False))

    order_type = db.Column(db.String(25), nullable=False)
    order_status = db.Column(db.String(25), nullable=False, default="received")
    subtotal = db.Column(db.Numeric(10,2), nullable=False)
    discount = db.Column(db.Numeric(10,2), nullable=False, default=0)
    tax = db.Column(db.Numeric(10,2), nullable=False)
    tip = db.Column(db.Numeric(10,2), nullable=False, default=0)
    total = db.Column(db.Numeric(10,2), nullable=False)

    customer_name = db.Column(db.String(150), nullable=False)
    customer_email = db.Column(db.String(100), nullable=False)
    customer_phone_number = db.Column(db.String(30), nullable=True)
    delivery_address = db.Column(db.Text, nullable=False)

    created_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.Datetime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    # OrderItem has order = db.relationship("Order", back_populates="items")
    # Order model needs the matching side
    items = db.relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.customer_id,
            "order_type": self.order_type,
            "order_status": self.order_status,
            "subtotal": float(self.subtotal),
            "discount": float(self.discount),
            "tip": float(self.tip),
            "total" : float(self.total),
            "customer_name": self.customer_name,
            "customer_email": self.customer_email,
            "customer_phone_number": self.customer_phone_number,
            "delivery_address": self.delivery_address,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }