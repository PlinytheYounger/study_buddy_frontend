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
                <div style={{textAlign: "center"}} className="container-fluid login-signup-collapse mt-5" id="login-signup-form-collapse">
                    
                    <button className="btn btn-primary mr-5" type="button" data-toggle="collapse" data-target="#signup-component" aria-expanded="false" aria-controls="signup-component"><h3>Sign Up for Study Buddy!</h3></button>

                    <button className="btn btn-primary ml-5" type="button" data-toggle="collapse" data-target="#login-component" aria-expanded="false" aria-controls="login-component"><h3>Login to Your Profile</h3></button>

                </div>
                <div className="collapse multi-collapse pt-5" id="signup-component">
                    <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>
                <div className="collapse multi-collapse pt-5" id="login-component">
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>

                <div className="home-background container-fluid">
                    <h2>Ace your next technical interview!</h2>
                    <h3>Create customized study guides</h3>
                    <h3>that fit your schedule.</h3>
                </div>
                <Footer />
            </div>
        )
    }
}