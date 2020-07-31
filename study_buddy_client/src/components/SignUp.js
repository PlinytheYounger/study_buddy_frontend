import React, {Component} from 'react';
import '../css/main.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
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
        const {
            email,
            password,
            name,
            password_confirmation,
            username
        } = this.state;

        axios.post("http://localhost:3001/registrations", {
            user: {
                username: email,
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
                <Header />
                <h1>Status: {this.props.loggedInStatus}</h1>
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="text-inputs">
                        <h2>Sign up for Study Buddy!</h2>
                        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required/>

                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} required/>

                        <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required/>

                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required/>

                        <input type="password" name="password_confirmation" value={this.state.password_confirmation} placeholder="Password confirmation" onChange={this.handleChange} required/>
                    </div>
                    {/* <div className="concept-comprehension">
                        <h3>Concept Comprehension</h3>
                        <label>Big O Notation</label>
                        <select>
                            <option value="0">I've heard about this concept...</option>
                            <option value="25">I've read about this and tried a couple of problems.</option>
                            <option value="50">I've done some problems, but don't get every one correct</option>
                            <option value="75">I've done multiple problems, feeling mostly comfortable.</option>
                            <option value="100">Very comfortable</option>
                        </select>
                        <label>Sorting Algorithms</label>
                        <select>
                            <option value="0">I've heard about this concept...</option>
                            <option value="25">I've read about this and tried a couple of problems.</option>
                            <option value="50">I've done some problems, but don't get every one correct</option>
                            <option value="75">I've done multiple problems, feeling mostly comfortable.</option>
                            <option value="100">Very comfortable</option>
                        </select>
                        <label>Solving Patterns</label>
                        <select>
                            <option value="0">I've heard about this concept...</option>
                            <option value="25">I've read about this and tried a couple of problems.</option>
                            <option value="50">I've done some problems, but don't get every one correct</option>
                            <option value="75">I've done multiple problems, feeling mostly comfortable.</option>
                            <option value="100">Very comfortable</option>
                        </select>
                        <label>Data Structures</label>
                        <select>
                            <option value="0">I've heard about this concept...</option>
                            <option value="25">I've read about this and tried a couple of problems.</option>
                            <option value="50">I've done some problems, but don't get every one correct</option>
                            <option value="75">I've done multiple problems, feeling mostly comfortable.</option>
                            <option value="100">Very comfortable</option>
                        </select>
                    </div> */}
                    <button type="submit">Register!</button>
                </form>
                <div>
                    <h3>Already have an account? <Link to="/login">Login.</Link></h3>
                </div>
                <Footer />
            </div>
        )
    }
}
