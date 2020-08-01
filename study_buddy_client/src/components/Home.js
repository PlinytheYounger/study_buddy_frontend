import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
    
      handleSuccessfulAuth = (data) => {
          console.log(data);
            // TODO update parent component
            this.props.handleLogin(data);
          this.props.history.push(`/profile/${data.user.id}`)
      }

    render() {
        return(
            <div className="home">
                <Header />
                <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Footer />
            </div>
        )
    }
}