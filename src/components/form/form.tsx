import React from 'react';
import FormGroup from './form-groups/form-group';

function Form() {
    return (
        <div id="container">
            <div className="form-wrap">
                <form className="form">
                    <div className="form-flex-items">
                        <FormGroup className="form-group" id="components" labelValue="Components/s" type="text"></FormGroup>

                        <FormGroup className="form-group" id="label" labelValue="Label" type="text"></FormGroup>

                        <FormGroup className="form-group" id="sprint" labelValue="Sprint:" type="text"></FormGroup>

                        <FormGroup className="form-group" id="story-points" labelValue="Story Points:" type="text"></FormGroup>
                    </div>

                    <div className="form-flex-items">
                        <FormGroup className="form-group" id="assignee" labelValue="Assignee:" type="text"></FormGroup>
                    
                        <FormGroup className="form-group" id="reporter" labelValue="Reporter:" type="text"></FormGroup>

                        <FormGroup className="form-group" id="description" labelValue="Description:" type="text"></FormGroup>

                        <FormGroup className="form-group" id="Attatchment" labelValue="Attatchment:" type="text"></FormGroup>
                    
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;