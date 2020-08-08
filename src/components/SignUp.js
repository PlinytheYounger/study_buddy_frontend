import React, {Component} from 'react';
import '../css/main.css';
// import Header from './Header';
// import Footer from './Footer';
import axios from 'axios';

export default class SignUp extends Component {
    state = {
        username: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.props)
        const {
            email,
            password,
            name,
            password_confirmation,
            username
        } = this.state;

        axios.post("http://localhost:3000/users", {
            user: {
                username: username,
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("registration error", error);
        })
        e.preventDefault();
    }

    render() {
        return(
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="text-inputs">
                        <h2>Sign up for Study Buddy!</h2>
                        <input className="form-control" type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required/>

                        <input className="form-control" type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} required/>

                        <input className="form-control" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required/>

                        <input className="form-control" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required/>

                        <input className="form-control" type="password" name="password_confirmation" value={this.state.password_confirmation} placeholder="Password confirmation" onChange={this.handleChange} required/>
                    </div>
                    <button type="submit">Register!</button>
                </form>
            </div>
        )
    }
}
