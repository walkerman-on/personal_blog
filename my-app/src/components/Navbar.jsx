import React from 'react';
import { Link } from "react-router-dom";

import MyButton from './UI/button/MyButton';

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <MyButton>
                <Link to = "/about">О сайте</Link>
            </MyButton>
            <MyButton>
                <Link to = "/posts">Посты</Link>
            </MyButton>
        </div>
    );
};

export default Navbar; 