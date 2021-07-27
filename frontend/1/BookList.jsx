import React from 'react';

import Book from './Book.jsx';

class BookList extends React.Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const productList = this.props.productList.map(product => {
      return <Book 
          key={product.name}
          name={product.name}
          price ={product.price}
          inStock ={product.inStock}
          login = {product.login}
          fetchCartList = {this.props.fetchCartList}
          fetchProductList = {this.props.fetchProductList}
          serverAddress = {this.props.serverAddress}
          loggedLogin = {this.props.loggedLogin}
        />
    });

    return (
        <div style={{textAlign:'center'}}>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{productList} 
        </div>
    );
  }
}

export default BookList;
