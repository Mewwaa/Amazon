import React from 'react';

class ShopForm extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      table : [],
  }


    this.shop = this.shop.bind(this)

  }



    shop(e) {
        e.preventDefault();
        fetch(this.props.serverAddress + 'shop', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
              login : this.props.loggedLogin
            })
        })
        .then(res => res.json())
        .then(
        (result) => { 
          alert(result.info)
          this.props.fetchCartList();
          this.props.fetchBookList();
        }
        )
        alert("Payment accepted, you will receive your books in one week.");
    }

  render() {
    console.log(this.props.cartList);
    console.log(this.state.cartList)
    return (
        <div>
          
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}****************************************************************</div>
            <form onSubmit={this.shop}>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<button type="submit">Buy</button>
                <div><br></br></div>
            </form>
            <div style={{'whiteSpace': 'pre-wrap'}}/>
        </div>
    );
  }
}

export default ShopForm;

