import React from 'react';
import classes from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
      <select 
        value = {value}
        onChange= {event => onChange(event.target.value)}
        className = {classes.MySlct + " " + classes.textSlct}
      >
        <option disabled value = "" >{defaultValue}</option>
        {options.map(item =>
            <option key = {item.value} value = {item.value}>
                {item.name}
            </option>
        )}
      </select>
    );
};

export default MySelect;