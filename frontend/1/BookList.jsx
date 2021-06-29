import React from 'react';

import Book from './Book.jsx';

class BooksList extends React.Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const booksList = this.props.booksList.map(book => {
      return <Book 
          key={book.title}
          title={book.title}
          author ={book.author}
          quantity ={book.quantity}
          serverAddress = {this.props.serverAddress}
          fetchProductList = {this.props.fetchProductList}
          fetchCartList = {this.props.fetchCartList}/>
    });

    return (
        <div>
            {booksList} 
        </div>
    );
  }
}

export default BooksList;

