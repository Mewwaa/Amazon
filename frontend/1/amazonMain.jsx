import React from 'react';

import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import Shop from './shop.jsx';


class AmazonMain extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      bookList : [],
      viewport: 0,
      loggedLogin: 'none'
    }

    this.serverAddress = 'http://localhost:3001/';

    this.setLoggedLogin = this.setLoggedLogin.bind(this);
    this.setloggedPassword = this.setloggedPassword.bind(this);

    this.fetchData = this.fetchData.bind(this);
    this.handleViewport = this.handleViewport.bind(this);
  }

  setloggedPassword(incomingPesel) {
    this.setState({loggedPassword : incomingPesel});
  }
  setLoggedLogin(incomingLogin) {
    this.setState({loggedLogin : incomingLogin});
  }
  handleViewport(element) {
    this.setState({ viewport : element})
  }

  fetchData(address, elementName) {
    fetch(address)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
            [elementName]: result
        });
      }
    ) 
  }

  render() {
    let renderedComponent = {};
    switch(this.state.viewport){
      case 0:
        renderedComponent =  <LoginForm 
          serverAddress = {this.serverAddress}
          handleViewport = {this.handleViewport}
          setloggedPassword = {this.setloggedPassword}
        />
        break;
      case 1:
        renderedComponent = <RegisterForm 
        serverAddress = {this.serverAddress}
        handleViewport = {this.handleViewport}
        />
        break;
      case 2:
        renderedComponent= <Shop
        serverAddress = {this.serverAddress}
        handleViewport = {this.handleViewport}
        setloggedPassword = {this.setloggedPassword}
        setLoggedLogin = {this.setLoggedLogin}
        loggedLogin = {this.state.loggedLogin}
        />
        break;
    }

    return (
      <div>
        {renderedComponent}
      </div>
    );
  }
}

export default AmazonMain;

