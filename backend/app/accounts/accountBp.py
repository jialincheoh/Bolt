from flask import (
    Blueprint,
    session,
    jsonify,
    request,
    render_template,
    session,
    redirect,
)
from flask_cors import CORS
import requests
import json

from app.config import *

accountRoutes = Blueprint("accountRoutes", __name__)
CORS(accountRoutes)


@accountRoutes.route("/add_account", methods=["GET"])
def new_account():
    return "New Account Route"
