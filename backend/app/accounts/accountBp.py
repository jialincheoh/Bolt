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
    args_list = request.args
    uid = args_list["user_id"]
    UserManagement.delete_user_by_id(uid)
    return True



@accountRoutes.route("/add_account", methods=["POST"])
def new_account():
    args_list = request.args
    uid=args_list["user_id"]
    name = args_list["name"]
    u = User(uid,name)
    UserManagement().create_user(u)
    return True

    
