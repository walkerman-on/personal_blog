import React from 'react';
import { Routes, Route } from "react-router-dom";

import About from "../pages/About"
import NotFound from "../pages/NotFound";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path = "/about" element = {<About/>} />
            <Route path = "/posts" element = {<Posts/>} />
            <Route path = "/posts/:id" element = {<PostIdPage/>} />
            <Route path = "*" element = {<NotFound/>} />
        </Routes>
    );
};

export default AppRouter; 