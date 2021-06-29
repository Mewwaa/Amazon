// import React from 'react';

// class Book extends React.Component { 
//   constructor(props) { 
//     super(props);
//   }
  
//   render() {
//     return (
//       <div style={{'display' : 'flex'}}>
//         <div style={{'whiteSpace': 'pre-wrap'}}/>
//         <div>Title {this.props.title}</div>
//         <div>Author: {this.props.author}</div>
//         <div>Quantity: {this.props.quantity}</div>
//         <div style={{'whiteSpace': 'pre-wrap'}}/>
//       </div>
//     );
//   }
// }

// export default Book;

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
            title: this.props.title,
            author: this.props.author,
            quantity: this.props.quantity
        })
    })
    .then(res => res.json())
    .then(
    (result) => {
        alert(result.info);
        console.log(result)
        this.props.fetchCartList();
        this.props.fetchBookList();
    }
    )
}

  
  render() {
    return (
      <div style={{'display' : 'flex', 'textAlign':'center', marginLeft:'600px'}}>
        <div style={{'whiteSpace': 'pre-wrap'}}/>
        <div>Title: {this.props.title}</div>{'\u00A0'}{'\u00A0'}
        <div>Author: {this.props.author}</div>{'\u00A0'}{'\u00A0'}
        <div>Quantity: {this.props.quantity}</div>{'\u00A0'}{'\u00A0'}
        <div style={{'whiteSpace': 'pre-wrap'}}/>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}
export default Book;