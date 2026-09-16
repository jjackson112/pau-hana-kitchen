import json

from app import create_app
from extensions import db
from models.menu_item import MenuItem

app = create_app()

# read menu data from frontend into a Python list
with open("data/menu.json", "r") as file:
    menu_items = json.load(file)

with app.app_context():
    # create a MenuItem loop 
    for item in menu_items:
        menu_item = MenuItem(
            name = item["name"],
            description = item["description"],
            price = item["price"],
            category = item["category"],
            popular = item["popular"],
            vegetarian = item["vegetarian"]
        )
        db.session.add(menu_item)

    db.session.commit()

    print("Seed complete")