import React, {Component} from 'react';
import '../css/main.css';
import {Link} from 'react-router-dom';


class Home extends Component {
    state = {
        user: []
    }

    handleSignUp = (info) => {
        fetch('http://localhost:3000/users', {
            body: JSON.stringify(
                info
            ),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            localStorage.setItem("token", response.token)
            // localStorage.token = response.data.token;
            this.setState({
                user: {
                    isLoggedIn: true,
                    name: '',
                    email: '',
                    password: '',
                },
                user: [response, ...this.state.response]
            })
        })
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
                                <h3><Link to="/signup">Sign up --></Link></h3>
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
                        <h2>Track your progress and your interviews all in one easy place.</h2>
                    </div>
                </section>
            </div>
        )
    }
    }


export default Home;