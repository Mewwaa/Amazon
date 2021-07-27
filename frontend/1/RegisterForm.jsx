import React from 'react';

class RegisterForm extends React.Component { 
  constructor(props) { 
        super(props);
        this.state = {
            login: 'Marchewka',
            password: 'haslo123',
            confirmPassword: 'haslo123'
        }
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        

        this.registerUser = this.registerUser.bind(this);
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

    handleConfirmPasswordChange(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    registerUser(e) {
        if (this.state.password === this.state.confirmPassword) {
            e.preventDefault();
            fetch(this.props.serverAddress + 'register', {
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
            .then(this.props.handleViewport(0))
 
            
            
        } else {
            alert("Passwords does not match!");
        }
    }

  render() {
    return (
        <div>
            <div><br></br></div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} You're only one step away from shopping on amazing Amazon Book Shop</div>
            <div>{'\u00A0'}{'\u00A0'}{'\u00A0'} ****************************************************************</div>
            <ul>
                <li>Login{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input value={this.state.login} onChange={this.handleLoginChange} /></li>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <li>Password{'\u00A0'}{'\u00A0'}{'\u00A0'}<input value={this.state.password} onChange={this.handlePasswordChange} /></li>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <li>Password{'\u00A0'}{'\u00A0'}{'\u00A0'}<input value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} /></li>
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <div><br></br></div>
                <button onClick={this.registerUser}>Register</button>
                <div><br></br></div>
            </ul>
        </div>
    );
  }
}

export default RegisterForm;

