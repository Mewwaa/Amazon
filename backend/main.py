from flask import Flask, redirect, url_for, jsonify, request, render_template
from flask_cors import CORS
from flask_mysqldb import MySQL
import mysql
import mysql.connector
import requests
import random
app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'Amazon'
 
mysql = MySQL(app)

class cart:
  def __init__(self, title, author, quantity) -> None:
    self.title = title
    self.author = author
    self.quantity = quantity

  def to_dict(self):
    return {
      'title' : self.title, 
      'author' : self.author, 
      'quantity': self.quantity,
    }

class product:
  def __init__(self, title, author, quantity) -> None:
    self.title = title
    self.author = author
    self.quantity = quantity

  def to_dict(self):
    return {
      'title' : self.title, 
      'author' : self.author, 
      'quantity': self.quantity
    }

@app.route('/register', methods=['POST'])
def adduser():
  userInfo = request.json
  cursor = mysql.connection.cursor()
  newuser = "INSERT INTO Users (name, surname, login, password) VALUES (%s, %s, %s, %s)"
  newuserValues = (userInfo["name"],userInfo["surname"],userInfo["login"], userInfo["password"])
  cursor.execute(newuser, newuserValues)   
  mysql.connection.commit()
  cursor.close()
  return {'info' : 'User registered succesfully', 'code': 200, 'type' : userInfo['name']}

@app.route('/login', methods=['POST'])
def login():
  userInfo = request.json
  cursor = mysql.connection.cursor()
  cuser = "Select * from Users where login = (%s) and password = (%s)"
  cuserValues = (userInfo["login"], userInfo["password"])
  cursor.execute(cuser, cuserValues)   
  mysql.connection.commit()
  cursor.close()
  is_user = True if cursor.rowcount >=1 else False
  return {'status' : is_user}

@app.route('/addToCart', methods=['POST'])
def addcart():
  cartInfo = request.json
  cursor = mysql.connection.cursor()
  newcart = "INSERT INTO Amazon.cart(title,author,quantity)VALUES(%s, %s, %s);"
  newcartValues = (cartInfo["title"], cartInfo["author"], cartInfo["quantity"])
  cursor.execute(newcart, newcartValues)   
  mysql.connection.commit()
  cursor.close()
  return {'info' : 'Product added to cart', 'code': 200}

# @app.route("/getCartByUsersLogin", methods=['POST'])
# def getCartByUsersLogin():
#   cartInfo = request.json
#   cursor = mysql.connection.cursor()
#   newreq = "SELECT * FROM cart WHERE login = '{0}';"
#   cursor.execute(newreq.format(cartInfo["login"]))  
#   rows = cursor.fetchall() 
#   mysql.connection.commit()
#   carts = [cart(*row).to_dict() for row in rows]
#   cursor.close()
#   return {'carts' : carts}


@app.route("/GetProducts", methods=['POST'])
def GetProducts():
  cursor = mysql.connection.cursor()
  newreq = "SELECT * FROM product;"
  cursor.execute(newreq)  
  rows = cursor.fetchall() 
  mysql.connection.commit()
  prods = [product(*row).to_dict() for row in rows]
  cursor.close()
  return {'carts' : prods}

# @app.route("/shop", methods=['POST'])
# def shop():
#   cartInfo = request.json
#   cursor = mysql.connection.cursor()
#   newreq = "DELETE FROM cart WHERE login = '{0}';"
#   cursor.execute(newreq.format(cartInfo["login"]))  
#   rows = cursor.fetchall() 
#   mysql.connection.commit()
#   carts = [cart(*row).to_dict() for row in rows]
#   cursor.close()
#   return {'carts' : carts}











# @app.route('/showAllBooks',methods=['POST'])
# def showBooks():
#   cursor = mysql.connection.cursor()
#   books = "Select * from Books"
#   cursor.execute(books)
#   rows = coursor.fetchall()
#   mysql.connection.commit()
#   prods = [product(*row).to_dict() for row in rows]
#   cursor.close()
#   return {'Books':prods}   

# @app.route('/addToCart', methods=['POST'])
# def addcart():
#   cartInfo = request.json
#   cursor = mysql.connection.cursor()
#   newcart = "INSERT INTO bookshop.cart(name,price,inStock,login)VALUES(%s, %s, %s, %s);"
#   newcartValues = (cartInfo["name"], cartInfo["price"], cartInfo["inStock"], cartInfo["login"])
#   cursor.execute(newcart, newcartValues)   
#   mysql.connection.commit()
#   cursor.close()
#   return {'info' : 'Product added to cart', 'code': 200, 'type' : cartInfo['name']}



# @app.route("/deleteFromCart", methods=['POST'])
# def deleteFromCart():
#   cartInfo = request.json
#   cursor = mysql.connection.cursor()
#   newcart = "DELETE FROM cart WHERE name = (%s) and login = (%s);"
#   newcartValues = (cartInfo["name"], cartInfo["login"])
#   cursor.execute(newcart, newcartValues)   
#   mysql.connection.commit()
#   cursor.close()
#   return {'info' : 'Product deleted from cart', 'code': 200, 'type' : cartInfo['name']}

# @app.route('/register', methods=['POST'])
# def adduser():
#   userInfo = request.json
#   cursor = mysql.connection.cursor()
#   checkIfPupilExists = "Select * from Users where Users.password={}".format(password)
#   mycursor.execute(checkIfPupilExists)
#   result = mycursor.fetchone()   
#   if result is None:
#     newuser = "INSERT INTO Users (name, surname, login, password) VALUES (%s, %s, %s, %s)"
#     newuserValues = (userInfo["name"],userInfo["surname"],userInfo["login"], userInfo["password"])
#     cursor.execute(newuser, newuserValues)   
#     mysql.connection.commit()
#     cursor.close()
#     return {'info' : 'User registered succesfully', 'code': 200, 'type' : userInfo['name']}
#   return {'info' : 'User already exists', 'code': 404}

if __name__ == "__main__":
  app.run("localhost", 3001, True, {})

