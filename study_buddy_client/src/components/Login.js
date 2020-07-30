import React, {Component} from 'react';
import '../css/main.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
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

    logIn = (event) => {
        event.preventDefault();
        this.props.handleLogIn(this.state);
        this.setState({
            email: '',
            password: ''
        })
    }
    render() {
        return(
            <div className="login-container">
                <Header />
                <div className="login-form-container">
                    <form>
                        <h2>Login</h2>
                        <input type="username" name="username" id="username" placeholder="username"/>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                        <input type="submit" id="submit" name="submit"/>
                    </form>
                    <div>
                    <h3>Don't have an account? <Link to="/signup">Sign up now!</Link></h3>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Login;