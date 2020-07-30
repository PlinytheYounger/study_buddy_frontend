import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Router} from 'react-router';
import {createBrowserHistory} from 'history';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/userProfile/ProfileContainer'
import * as serviceWorker from './serviceWorker';

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'Login-Modal'
    },
    {
        path: '/users/:id',
        component: Profile,
        name: 'Profile-Page'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'Signup-Page'
    },
    {
        path: '/',
        component: App,
        name: 'Home-Page'
    }
];

const root = document.getElementById("root");
const hist = createBrowserHistory();

ReactDOM.render(<Router history={hist}>
    <Switch>
        {
            routes.map((route)=>{
                return(
                    <Route path={route.path} component={route.component} key={route.name}></Route>
                )
            })
        }
    </Switch>
</Router>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
