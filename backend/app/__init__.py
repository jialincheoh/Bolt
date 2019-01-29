from flask import Flask
from flask_cors import CORS
from .accountBp import *

app = Flask(__name__)
app.secret_key = "OhaIHhvok58rUufTg4aYBymETLte5RfvYykUJa8p"

CORS(app)

app.register_blueprint(accountRoutes)

