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
from app.dbCon import dbaseConn

from app.config import *
from  user import UserManagement, User
accountRoutes = Blueprint("accountRoutes", __name__)
CORS(accountRoutes)


@accountRoutes.route("/add_account", methods=["GET"])
def new_account():
    a = request.args
    email = a["email"]
    uid = a["user_id"]
    name = a["name"]
    #This part below is wrong...
    u = User(uid, name)
    UserManagement.create_user(u)
    #makes sure everything is ok for now, will change to success or error message
    return(str(email) + " " + str(uid))
    
    #return "New Account Route"

#@accountRoutes.route("/delete_account", methods=["POST"])
#def delete_account():

