import React from 'react';
import CartList from './CartList.jsx';
import BookList from './BookList.jsx';
import ShopForm from './ShopForm.jsx'

class Shop extends React.Component { 
    constructor(props) { 
      super(props);
      this.state = {
          productList : [],
          cartList: []
      }
      this.fetchBookList = this.fetchBookList.bind(this);
      this.fetchCartList = this.fetchCartList.bind(this);
      
  
    }
  
    componentDidMount() {
      this.fetchBookList();
      this.fetchCartList();
        
    }
    fetchBookList() {
          fetch(this.props.serverAddress + 'GetProducts', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                productList: result.carts
            });
          }
        )
      }
    fetchCartList() {
        fetch(this.props.serverAddress + 'showCart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.props.loggedLogin
            })
        })
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({cartList: result.carts})
        }
        )
        console.log(this.props.loggedLogin)
      }
  
  
    render() {
      return (
        <div style={{textAlign:"center", 'color':'#8163ba'}}>
          <div><br></br></div>
          <div  className='headingPatient' id='heading'><h2>Amazon Book Shop</h2></div>
          <div><br></br></div>
          <ul>
            
          <div>****************************************************************</div>
          <li>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<div style={{'width': '100px', 'color': '#8163ba'}}>Available books:</div></li>
          <BookList 
              loggedLogin = {this.props.loggedLogin}
              productList={this.state.productList}
              serverAddress = {this.props.serverAddress}
              fetchBookList = {this.fetchBookList}
              fetchCartList = {this.fetchCartList}
          />
          <div>****************************************************************</div>
          
          <li>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<div style={{'width': '100px', 'color': '#8163ba'}}>Your cart:</div></li>
          <CartList 
              loggedLogin = {this.props.loggedLogin}
              cartList={this.state.cartList}
              serverAddress = {this.props.serverAddress}
              fetchBookList = {this.fetchBookList}
              fetchCartList = {this.fetchCartList}
              
          />
          </ul>

          <ShopForm
              loggedLogin = {this.props.loggedLogin}
              cartList={this.state.cartList}
              productList={this.state.productList}
              serverAddress = {this.props.serverAddress}
              fetchBookList = {this.fetchBookList}
              fetchCartList = {this.fetchCartList}        
          />

        </div>
      );
    }
  }
  
  export default Shop;