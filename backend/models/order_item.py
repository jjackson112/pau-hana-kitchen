from extensions import db

class Order_Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("order.id", nullable=False))

    menu_item_id = db.Column(db.Integer, nullable=True)
    name = db.Column(db.String(150), nullable=False)
    price = db.Column(db.Numeric(10,2), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    order = db.relationship("Order", back_populates="items")

    def to_dict(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "menu_item_id": self.menu_item_id,
            "name": self.name,
            "price": float(self.price),
            "quantity": self.quantity
        }