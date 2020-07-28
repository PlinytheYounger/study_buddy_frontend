import React from 'react';
import '../css/main.css';

function Header() {
    return(
        <header>
            <div className="logo">
                <img src={require("../images/S.png")} alt="logo"></img>
            </div>
            <nav>
                <div className="header_menu">
                    <a href="#" className="user_account_login_modal">
                        <span className="user_icon">
                            <svg></svg>
                            <div className="user_details"></div>
                        </span>
                    </a>
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
                    <a href="#" className="open_sidebar_nav"></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
