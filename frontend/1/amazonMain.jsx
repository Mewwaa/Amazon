import React from 'react';

import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';


class amazonMain extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
        viewport: 0,
        loggedPassword: 'none'
    }

    this.serverAddress = 'http://localhost:3001/';


    this.setloggedPassword = this.setloggedPassword.bind(this);

    this.fetchData = this.fetchData.bind(this);
    this.handleViewport = this.handleViewport.bind(this);
  }

  setloggedPassword(incomingPesel) {
    this.setState({loggedPassword : incomingPesel});
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
    }

    return (
      <div>
        {renderedComponent}
      </div>
    );
  }
}

export default amazonMain;

