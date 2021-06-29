import React from 'react';
import BooksList from './BookList.jsx';

class Shop extends React.Component { 
    constructor(props) { 
      super(props);
      this.state = {
          bookList : []
      }

      this.fetchBookList = this.fetchBookList.bind(this);
  
    }
  
    componentDidMount() {
        this.fetchBookList();
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
            bookList: result.carts
          });
        }
      )
    }
  
    render() {
      return (
        <div style={{textAlign:"center", 'color':'red'}}>
        
          <div  className='headingPatient' id='heading'><h2>Shop Page</h2></div>
          <div style={{'whiteSpace': 'pre-wrap'}}/>
          <div style={{'width': '70px', 'color': 'black'}}>ProductList:</div>
          <BooksList 
              bookList={this.state.bookList}
              serverAddress = {this.props.serverAddress}
              fetchBookList = {this.fetchBookList}
          />  

        </div>
      );
    }
  }
  
  export default Shop;