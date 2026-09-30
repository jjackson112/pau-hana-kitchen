from extensions import db

class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    popular = db.Column(db.Boolean, nullable=False, default=False)
    vegetarian = db.Column(db.Boolean, nullable=False, default=False)
    image_url = db.Column(db.String(500), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": float(self.price),
            "category": self.category,
            "popular": self.popular,
            "vegetarian": self.vegetarian,
            "image_url": self.image_url
        }