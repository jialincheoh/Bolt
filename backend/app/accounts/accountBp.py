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
from app.accounts.user import UserManagement

accountRoutes = Blueprint("accountRoutes", __name__)
CORS(accountRoutes)


@accountRoutes.route("/delete_account", methods=["POST"])
def delete_account():
    a = request.args
    uid = a["user_id"]
    UserManagement.delete_user_by_id(uid)
    return(str(a))

@accountRoutes.route("/add_account", methods=["GET"])
def new_account():
    return "New Account Route"
