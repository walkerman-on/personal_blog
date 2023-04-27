import React from 'react';
import classes from "./MyButton.module.css"

const MyButton = (props) => {
    return (
        <button {...props} className = {classes.myBtn + " " + classes.textBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;