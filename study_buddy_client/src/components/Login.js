import React, {Component} from 'react';
import '../css/main.css';
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: "",
        name: "",
        email: "",
        password: "",
        loginErrors: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {
            password,
            username
        } = this.state;

        axios.post("http://localhost:3001/sessions", {
            user: {
                username: username,
                password: password
            }
        }).then(response => {
            console.log(response)
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("login error", error);
        })
        e.preventDefault();
        
    }
    render() {
        return(
            <div className="login-container">
                <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="text-inputs">
                        <h2>Login to your account!</h2>

                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} required/>

                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required/>
                    </div>
                    <button type="submit">Login!</button>
                </form>
                </div>
            </div>
        )
    }
}
