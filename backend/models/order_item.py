from extensions import db

class Order_Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("order.id", nullable=False))

    name = db.Column()
    price = db.Column()
    quantity = db.Column()