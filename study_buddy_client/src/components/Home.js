import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
    
      handleSuccessfulAuth = (data) => {
            // TODO update parent component
            this.props.handleLogin(data);
            this.props.history.push(`/users/${data.id}`)
      }

    render() {
        return(
            <div className="home" style={{background: '#568DE9'}}>
                <Header />
                <div style={{textAlign: "center"}} className="login-signup-collapse" id="login-signup-form-collapse">
                    
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#signup-component" aria-expanded="false" aria-controls="signup-component">Sign Up for Study Buddy!</button>

                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#login-component" aria-expanded="false" aria-controls="login-component">Login to Your Profile</button>

                </div>
                <div className="collapse multi-collapse" id="signup-component">
                    <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>
                <div className="collapse multi-collapse" id="login-component">
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>
                <Footer />
            </div>
        )
    }
}