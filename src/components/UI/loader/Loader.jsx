import React from 'react';
import classes from "./Loader.module.css"

const Loader = () => {
    return (
        <div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
            <div className= {classes.loader}>
                <div className= {classes.dot}></div>
            </div>
        </div>
    );
};

export default Loader;