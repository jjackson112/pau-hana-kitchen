import json
from extensions import db
from models.menu_item import MenuItem

with open("data/menu.json", "r") as file:
    menu_items = json.load(file)