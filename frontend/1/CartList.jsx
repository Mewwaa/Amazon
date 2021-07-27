import React from 'react';

import Cart from './Cart.jsx';

class CartList extends React.Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const cartList = this.props.cartList.map(cart => {
      return <Cart 
          key={cart.name}
          name={cart.name}
          price ={cart.price}
          inStock ={cart.inStock}
          login = {cart.login}
          loggedLogin = {this.props.loggedLogin}
          serverAddress = {this.props.serverAddress}
          fetchProductList = {this.props.fetchProductList}
          fetchCartList = {this.props.fetchCartList}

        />
    });

    return (
        <div>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{cartList} 
        </div>
    );
  }
}

export default CartList;

