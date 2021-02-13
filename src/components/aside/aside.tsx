import React from 'react';
import '../../App.css';
import Dashboard from '../../images/Dashboard_dark.svg';
import issue_light from "../../images/Issues_light.svg";
import create_dark from "../../images/Create_dark.svg";
import AsideItem from './aside-item/aside-item';

function Aside() {
    return (
        <div className="container-element bg-light container-1">
            <div className="main-aside">
                <AsideItem class = "aside-item py-1" src = {Dashboard} value="Dashboard"></AsideItem>
                <AsideItem class = "aside-item current" src = {issue_light} value="Issues" h4Class= "white"></AsideItem>
                <AsideItem class = "aside-item" src = {create_dark} value="Create"></AsideItem>
            </div>
        </div>

    );
}

export default Aside;