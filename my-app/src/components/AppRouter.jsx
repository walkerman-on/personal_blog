import React from 'react';
import { Routes, Route } from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes"
import NotFound from "../pages/NotFound";
import Login from "../pages/Login"
import Posts from "../pages/Posts"

const AppRouter = () => {
    const isAuth = true

    return (
            isAuth
            ?
            <Routes>
                {privateRoutes.map((route) =>
                    <Route path = {route.path} element = {route.element}/>
                )}
                <Route path = "/posts" element = {<Posts/>}/>
            </Routes>
            : 
            <Routes> 
                {publicRoutes.map((route) =>
                    <Route path = {route.path} element = {route.element}/>
                )} 
                <Route path = "/login" element = {<Login/>}/>
            </Routes>
            );
};

export default AppRouter; 