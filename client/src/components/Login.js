import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
    }
    savePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.password == 'password') {
            AppState.login();
            this.props.history.replace('/admin');
        }
        else {
            alert('Password is wrong.');
        }
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <h3>Please sign in</h3>
                <input type="password"
                    placeholder="Type password"
                    value={this.state.password}
                    onChange={this.savePassword.bind(this)} />

                <button type="submit"> Submit </button>
            </form>
        );
    }
}

export default Login;