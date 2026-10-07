import json
import pathlib import Path

from app import create_app
from extensions import db
from models.menu_item import MenuItem

app = create_app()

# 
menu_path = Path(__file__).parent / "data" / "menu.json"

# read menu data from frontend into a Python list
with menu_path.open("data/menu.json", "r", encoding="utf-8") as file:
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