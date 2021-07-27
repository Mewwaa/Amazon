import React from 'react';

class LoginForm extends React.Component { 
  constructor(props) { 
        super(props);
        this.state = {
            login: 'Marchewka',
            password: 'haslo123',
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    handleLoginChange(e) {
        this.setState({
            login: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
  
    login(e) {
        e.preventDefault();
        fetch(this.props.serverAddress + 'login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(
        (result) => {
            if (result.status === false) {
                console.log('bad')

            } else {
                this.props.setLoggedLogin(this.state.login);
                console.log(this.props.loggedLogin)
                this.props.handleViewport(2);
            }
        }
        )
    }

    register(e){
        this.props.handleViewport(1);
    }

  render() {
    return (
        <div>
            <div><br></br></div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Login to Amazon Book Shop</div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'} ***********************************************************</div>
            <div><br></br></div>
            <form onSubmit={this.login}>
                <ul>
                <li>Login{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input value={this.state.login} onChange={this.handleLoginChange} /></li>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <li>Password  {'\u00A0'}{'\u00A0'}<input value={this.state.password} onChange={this.handlePasswordChange} /></li>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <div><br></br></div>
                <button type="submit">Login</button>
                </ul>
            </form>
            <div style={{'whiteSpace': 'pre-wrap'}}/>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'} ***********************************************************</div>
            <div><br></br></div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Or register if don't have an account yet</div>
            <div><br></br></div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<button onClick={this.register}>Register</button></div>
            <div><br></br></div>
        </div>
    );
  }
}

export default LoginForm;

