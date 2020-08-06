import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from "axios";
import './css/main.css';
import Profile from './components/userProfile/ProfileContainer';
import Home from './components/Home';

export default class App extends Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_id").then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: JSON.parse(response.data.user)
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("check login error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  handleLogin = (data) => {
    // going to take in data & update the state to "logged in"
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
            <Route 
                exact path={"/"}
                render={props => (
                    <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
                )}
            ></Route>

            <Route 
                exact path={"/users/:id"}
                render={props => (
                    <Profile {...props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
                )}
            ></Route>
        </Switch>
      </div>
    )};
  }
