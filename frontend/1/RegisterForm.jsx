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
            confirmPassword: e.target.value
        });
    }

    handleSurnameChange(e) {
        this.setState({
            email: e.target.value
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
            .then(
            (result) => {
                if (result.code === 401) {
                    alert(result.info);
                } else {
                    if (result.type === 'dr') {
                        this.props.handleViewport(3);
                    } else { 
                        this.props.handleViewport(2);
                    }
                }
            }
            )
        } else {
            alert("Passwords does not match!");
        }
    }

  render() {
    return (
        <div>
            <div>Welcome to your Amazon Account</div>
                Name<input value={this.state.email} onChange={this.handleNameChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                Surname<input value={this.state.pesel} onChange={this.handleSurnameChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                Login<input value={this.state.login} onChange={this.handleLoginChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                Password<input value={this.state.password} onChange={this.handlePasswordChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                Confirm password<input value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
                <div style={{'whiteSpace': 'pre-wrap'}}/>
                <button onClick={this.registerUser}>Register</button>
        </div>
    );
  }
}

export default RegisterForm;

