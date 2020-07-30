import React, {Component} from 'react';
import '../css/main.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        name: '',
        password: ''
    }
    
    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    SignUp = (event) => {
        event.preventDefault();
        this.props.handleSignup(this.state);
        this.setState({
            username: '',
            email: '',
            name: '',
            password: ''
        })
    }
    render() {
        return(
            <div className="signup-form-container">
                <Header />
                <form className="signup-form">
                    <div className="text-inputs">
                        <h2>Sign up for Study Buddy!</h2>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.updateName} placeholder="Name"/>
                        <input type="text" name="username" id="username" value={this.state.username} onChange={this.updateUsername} placeholder="Username"/>
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.updateEmail} placeholder="Email"/>
                        <input type="password" name="password" id="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/>
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
                    <input type="submit" onClick={this.handleSignup} value="Sign up!"/>
                </form>
                <div>
                    <h3>Already have an account? <Link to="/login">Login.</Link></h3>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignUp;