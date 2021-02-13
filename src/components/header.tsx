import React from 'react';
import '../App.css';
import logo from '../images/logo.svg';
import notification from '../images/notification.svg';
import user_1 from '../images/user_1.svg';

function Header() {
    return (
        <div id="main-header">
            <div className="logo">
                <img src={logo} alt=""/>
                <input type="search" name="" id="" placeholder="Search.."/>
                <img className = "user_1"  src={user_1} alt=""/>
                <img className = "svg" src={notification} alt=""/>
            </div>
        </div>
    );
}

export default Header;
