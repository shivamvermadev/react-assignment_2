import React from 'react';
import '../../../App.css';

function FormGroup(props: any) {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.labelValue}</label>
            <input type={props.type} name={props.name} id={props.id} />
        </div>
    );
}

export default FormGroup;