import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";
import MyButton from './UI/button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.getItem("auth")
    }

    return (
        <div className = 'navbar'>
             <MyButton onClick = {logout}>
                <Link to = "/posts">Выйти</Link>
            </MyButton>
            <div className = 'navbar_menu'>
                <MyButton>
                    <Link to = "/about">О сайте</Link>
                </MyButton>
                <MyButton disabled = {!isAuth === true}>
                    <Link to = "/posts">Посты</Link>
                </MyButton>
            </div>
        </div>
    );
};

export default Navbar; 