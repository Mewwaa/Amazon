import React from 'react';

class Book extends React.Component { 
  constructor(props) { 
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(e) {
    e.preventDefault();
    fetch(this.props.serverAddress + 'addToCart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.props.name,
            price: this.props.price,
            inStock: this.props.inStock,
            login: this.props.loggedLogin,
        })
    })
    .then(res => res.json())
    .then(
    (result) => {
        alert(result.info);
        console.log(result)
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
        <button onClick={this.addToCart}>Add to Cart</button>
        <div><br></br></div>
        <div><br></br></div>
      </div>
    );
  }
}
export default Book;

