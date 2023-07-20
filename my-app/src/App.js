import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
