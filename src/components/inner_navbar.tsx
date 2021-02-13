import React from 'react';
import DownArrow from '../images/down-arrow.png';
import Grid from '../images/Grid.svg';
import ListDeactivated from '../images/List deactivated.svg';

function InnerNav() {
    return (
        <nav className="issue-navbar">
            <div className="issue-navbar-item-1">
                <h3>Issues</h3>
            </div>
            <div className="issue-navbar-item-2">
                <div className="subitem-1">
                    <h3><span className="opacity">Filter</span> Project</h3>
                    <img src={DownArrow} alt="" />
                </div>
                <div className="subitem-2">
                    <img src={Grid} alt="" />
                    <img src={ListDeactivated} alt="" />
                </div>
            </div>
        </nav>
    );
}

export default InnerNav;