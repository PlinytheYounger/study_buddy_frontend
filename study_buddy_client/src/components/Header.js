import React, {Component} from 'react';
import '../css/main.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    
    render() {
        return(
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={require("../images/S.png")} alt="logo"></img>
                    </Link>
                </div>
                <nav>
                    <div className="header_menu">
                        <Link to="/login" >
                            <img src={require('../images/chat-one.png')} alt="user profile icon" to="/signup"/>
                        </Link>
                        <div className="user_panel">
                            <div>
                                <h2></h2>
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                            <div>
                                <h2></h2>   
                            </div>
                        </div>
                        {/* <a href="#" className="open_sidebar_nav">
    
                        </a> */}
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
