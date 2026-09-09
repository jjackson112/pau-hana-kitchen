from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from routes.health import health_bp

# create db without app + initialize later
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

# db configuration
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///pauhanakitchen.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# connect sql to app
    db.init_app(app)

# register routes
    app.register_blueprint(health_bp)

    return app