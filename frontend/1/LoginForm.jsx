import React from 'react';

class LoginForm extends React.Component { 
  constructor(props) { 
        super(props);
        this.state = {
            login: 'mew_waa',
            password: 'haslo1234',
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
    }

    register(e){
        this.props.handleViewport(1);
    }

  render() {
    return (
        <div>
            <div>Welcome to your Amazon Account</div>
            <form onSubmit={this.login}>
                Login<input value={this.state.login} onChange={this.handleLoginChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                Password<input value={this.state.password} onChange={this.handlePasswordChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <button type="submit">Login</button>
            </form>
            <div style={{'whiteSpace': 'pre-wrap'}}/>
            <div>----------------------------------</div>
            <button onClick={this.register}>Register</button>
        </div>
    );
  }
}

export default LoginForm;

