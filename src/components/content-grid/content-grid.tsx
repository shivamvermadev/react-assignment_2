import React from 'react';
import '../../App.css';

const ContentGridItem = (props: any) => {
    return (
        <div className={props.class}>
            <h2>{props.text}{props.length}</h2>
            {props.data}
        </div>
    );
};

export default ContentGridItem;