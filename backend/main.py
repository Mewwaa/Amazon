from flask import Flask, redirect, url_for, jsonify, request, render_template
from flask_cors import CORS
from flask_mysqldb import MySQL
app = Flask(__name__)
CORS(app)

import mysql
import mysql.connector
import requests
import random

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'amazonshop'
 
mysql = MySQL(app)

class cart:
    def __init__(self, name, price, inStock, login) -> None:
        self.name = name
        self.price = price
        self.inStock = inStock
        self.login = login

    def to_dict(self):
        return {
            'name' : self.name, 
            'price' : self.price, 
            'inStock': self.inStock,
            'login' : self.login
        }

class product:
    def __init__(self, name, price, inStock,) -> None:
        self.name = name
        self.price = price
        self.inStock = inStock

    def to_dict(self):
        return {
            'name' : self.name, 
            'price' : self.price, 
            'inStock': self.inStock
        }

@app.route('/register', methods=['POST'])
def register():
    userInfo = request.json
    cursor = mysql.connection.cursor()
    userRegistration = "INSERT INTO user (login, password) VALUES (%s, %s)"
    userRegistrationValues = (userInfo["login"], userInfo["password"])
    cursor.execute(userRegistration, userRegistrationValues)   
    mysql.connection.commit()
    cursor.close()
    return {'info' : 'User added successfully', 'code': 200, 'type' : userInfo['login']}

@app.route('/login', methods=['POST'])
def login():
    userInfo = request.json
    cursor = mysql.connection.cursor()
    userLogin = "Select * from user where login =(%s) and password = (%s)"
    userLoginValues = (userInfo["login"], userInfo["password"])
    cursor.execute(userLogin, userLoginValues)   
    mysql.connection.commit()
    cursor.close()
    is_user = True if cursor.rowcount >=1 else False
    return {'status' : is_user}

@app.route('/addToCart', methods=['POST'])
def addToCart():
    cartInfo = request.json
    cursor = mysql.connection.cursor()
    cart = "INSERT INTO amazonshop.cart(name,price,inStock,login)VALUES(%s, %s, %s, %s);"
    cartValues = (cartInfo["name"], cartInfo["price"], cartInfo["inStock"], cartInfo["login"])
    cursor.execute(cart, cartValues)   
    mysql.connection.commit()
    cursor.close()
    return {'info' : 'Product added to cart', 'code': 200, 'type' : cartInfo['name']}

@app.route("/removeFromCart", methods=['POST'])
def removeFromCart():
    cartInfo = request.json
    cursor = mysql.connection.cursor()
    remove = "DELETE FROM cart WHERE name = (%s) and login = (%s);"
    removeValues = (cartInfo["name"], cartInfo["login"])
    cursor.execute(remove, removeValues)   
    mysql.connection.commit()
    cursor.close()
    return {'info' : 'Product deleted from cart', 'code': 200, 'type' : cartInfo['name']}

@app.route("/showCart", methods=['POST'])
def showCart():
    cartInfo = request.json
    cursor = mysql.connection.cursor()
    newrequest = "SELECT * FROM cart WHERE login = '{0}';"
    cursor.execute(newrequest.format(cartInfo["login"]))  
    rows = cursor.fetchall() 
    mysql.connection.commit()
    carts = [cart(*row).to_dict() for row in rows]
    cursor.close()
    return {'carts' : carts}

@app.route("/GetProducts", methods=['POST'])
def GetProducts():
    cursor = mysql.connection.cursor()
    newrequest = "SELECT * FROM product;"
    cursor.execute(newrequest)  
    rows = cursor.fetchall() 
    mysql.connection.commit()
    prods = [product(*row).to_dict() for row in rows]
    cursor.close()
    return {'carts' : prods}

@app.route("/shop", methods=['POST'])
def shop():
    cartInfo = request.json
    cursor = mysql.connection.cursor()
    newrequest = "DELETE FROM cart WHERE login = '{0}';"
    cursor.execute(newrequest.format(cartInfo["login"]))  
    rows = cursor.fetchall() 
    mysql.connection.commit()
    carts = [cart(*row).to_dict() for row in rows]
    cursor.close()
    return {'carts' : carts}

app.run("localhost", 3001, True, {})

