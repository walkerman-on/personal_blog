import React from "react";
import classes from "./DeleteButton.module.css";

const DeleteButton = (props) => {
  return (
    <button {...props} className={classes.myBtn}>
      {props.children}
    </button>
  );
};

export default DeleteButton;
