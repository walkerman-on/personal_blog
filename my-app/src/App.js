import React from "react"
import { BrowserRouter, Routes, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About"
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Routes>
        <Route path = "/about" element = {<About/>} />
        <Route path = "/posts" element = {<Posts/>} />
      </Routes>
      <Redirect to = "/posts"/>
      </Switch>

    </BrowserRouter>
  )
}

export default App;
