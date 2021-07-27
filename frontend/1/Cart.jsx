import React from 'react';

class Cart extends React.Component { 
  constructor(props) { 
    super(props);
    this.deleteFromCart = this.deleteFromCart.bind(this)
  }
  

  deleteFromCart(e) {
    e.preventDefault();
    fetch(this.props.serverAddress + 'removeFromCart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.props.name,
            login: this.props.loggedLogin,
        })
    })
    .then(res => res.json())
    .then(
    (result) => {
        alert(result.info);
        this.props.fetchCartList();
        this.props.fetchProductList();
    }
    )
}


  render() {
    const inStock = this.props.inStock ? 'yes' : 'no';
    return (
      <div>
        <div style={{'whiteSpace': 'pre-wrap'}}/>
        <div>Title: {this.props.name}</div>{'\u00A0'}{'\u00A0'}
        <div>Price: {this.props.price}</div>{'\u00A0'}{'\u00A0'}
        <div>Availability: {inStock}</div>{'\u00A0'}{'\u00A0'}
        <div style={{'whiteSpace': 'pre-wrap'}}/>
        <button onClick={this.deleteFromCart}>Remove</button>
        <div><br></br></div>
        <div><br></br></div>
      </div>
    );
  }
}
export default Cart;

