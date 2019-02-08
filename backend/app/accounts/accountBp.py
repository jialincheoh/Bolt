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
from app.accounts.user import UserManagement, User

accountRoutes = Blueprint("accountRoutes", __name__)
CORS(accountRoutes)


@accountRoutes.route("/delete_account", methods=["POST"])
def delete_account():
    #when testing with Postman, pass in values via params
    a = request.args
    uid = a["user_id"]
    UserManagement.delete_user_by_id(uid)
    return "Successfully deleted account"



@accountRoutes.route("/add_account", methods=["POST"])
def new_account():
    a = request.args
    uid=a["user_id"]
    name = a["name"]
    u = User(uid,name)
    try:
        UserManagement().create_user(u)
    except Exception:
        return "Error during account creation"

    return "Successfully made account"
