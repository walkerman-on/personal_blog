import React from 'react';
import classes from "./ErrorMessage.module.css"

const Error = ({textError}) => {
    return (
        <div className = {classes.errorMessage}>
            <span className = {classes.loader}></span>
            <span className = {classes.errorText}>{textError}</span>
        </div>
    );
};

export default Error;