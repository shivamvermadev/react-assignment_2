import React from 'react';
import '../../../App.css'

function AsideItem(props: any) {
    return (
        <div className={props.class}>
            <img src={props.src} alt="" />
            <h4 className = {props.h4Class}>{props.value}</h4>
        </div>
    );
}

export default AsideItem;