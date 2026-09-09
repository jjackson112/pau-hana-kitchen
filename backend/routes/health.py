from flask import Blueprint

health_bp = Blueprint("health", __name__, url_prefix='/api')

@health_bp.route("/health")
def health():
    return {"status": 200}