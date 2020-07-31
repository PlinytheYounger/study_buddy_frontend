import React, {Component} from 'react';
import '../css/main.css';
import {Link, Route} from 'react-router-dom';
import SignUp from './SignUp';
import Profile from './userProfile/ProfileContainer';


export default class Home extends Component {
    state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
    }

    handleSuccessfulAuth = (data) => {
        // TODO update parent component
        this.props.history.push(`/profile/${this.props.user.id}`)
    }

    render() {
        return(
            <div className="page-wrapper">
                <section className="home-intro">
                    <div className="home-intro-container">
                        <div className="one"></div>
                        <div id="home-intro-content">
                            <h1>Ace your next technical interview!</h1>
                            <h3>Create customized study guides that fit your schedule.</h3>
                            <Link to="/signup"><h3>Sign Up!</h3></Link>
                        </div>
                        <div className="two"></div>
                    </div>
                </section>
    
                <section className="home-connect-container">
                    <div className="chat-icons">
                        <div id="chat-two">
                            <img src={require('../images/chat-two.png')} alt="chat-bubble"/>
                        </div>
                        <div id="chat-one">
                            <img src={require('../images/chat-one.png')} alt="chat-bubble"/>
                        </div>
                    </div>
                    <div>
                        <h2>Connect with other interviewees and practice mock interviews - peer to peer.</h2>
                    </div>
                </section>
    
                <section className="home-tracker-container">
                    <div className="tracker-img">
    
                    </div>
                    <div>
                        <Route 
                            exact path={"/signup"}
                            render={props => (
                                <SignUp {...props} loggedInStatus={this.state.loggedInStatus} handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                            )}
                        ></Route>
                    </div>

                    <div>
                        <Route 
                            exact path={"/profile/:id"}
                            render={props => (
                                <Profile {...props} loggedInStatus={this.state.loggedInStatus}/>
                            )}
                        ></Route>
                    </div>
                </section>
            </div>
        )
    }
    }
