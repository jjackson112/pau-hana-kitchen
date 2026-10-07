import os
from flask import Flask
from flask_cors import CORS
from extensions import db
from routes.health import health_bp
from routes.order import order_bp

def create_app():
    app = Flask(__name__)

# db configuration
# Read the database URL before using it
    database_url = os.environ.get(
        "DATABASE_URL",
        "sqlite:///pauhanakitchen.db"
    )

    if database_url.startswith("postgres://"):
        database_url = database_url.replace(
            "postgres://",
            "postgresql+psycopg://",
            1
        )

    elif database_url.startswith("postgres://"):
        database_url = database_url.replace(
            "postgres://",
            "postgresql+psycopg://",
            1
        )

    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# connect sql to app
    db.init_app(app)

    CORS(app, resources={ r"/api/*": { "origins": ["http://localhost:5173", os.environ.get("FRONTEND_URL", "http://localhost:5173")]}})

# Import models so SQLAlchemy knows what tables to create
    from models.order import Order
    from models.order_item import OrderItem
    from models.menu_item import MenuItem

    with app.app_context():
        db.create_all()

# register routes
    app.register_blueprint(health_bp)
    app.register_blueprint(order_bp)

    return app