import React from 'react';

class RegisterForm extends React.Component { 
  constructor(props) { 
        super(props);
        this.state = {
            name: 'Ewa',
            surname: 'Zalewska',
            login: 'mew_waa',
            password: 'haslo1234',
            confirmPassword: 'haslo1234'
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        

        this.registerUser = this.registerUser.bind(this);
    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
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
                    name: this.state.name,
                    surname: this.state.surname,
                    login: this.state.login,
                    password: this.state.password
                })
            })
            .then(res => res.json())
            .then(this.props.handleViewport(0))
            alert("User registered succesfully");
        } else {
            alert("Passwords does not match!");
        }
    }

  render() {
    return (
        <div class="registerForm">
            <p>Welcome to Amazon Book Store</p>
            <ul>
                <li>Name<input value={this.state.name} onChange={this.handleNameChange} /></li>

                <div style={{'whiteSpace': 'pre-wrap'}}/>

                <li>Surname<input value={this.state.surname} onChange={this.handleSurnameChange} /></li>
                
                <div style={{'whiteSpace': 'pre-wrap'}}/>

                <li>Login<input value={this.state.login} onChange={this.handleLoginChange} /></li>

                <div style={{'whiteSpace': 'pre-wrap'}}/>

                <li>Password<input type={this.state.hidden ? 'password' : 'text'} value={this.state.password} onChange={this.handlePasswordChange} /></li>

                <div style={{'whiteSpace': 'pre-wrap'}}/>

                <li>Confirm password<input value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} /></li>

                <div style={{'whiteSpace': 'pre-wrap'}}/>
            </ul>
            <button onClick={this.registerUser}>Register</button>

        </div>
    );
  }
}

export default RegisterForm;

