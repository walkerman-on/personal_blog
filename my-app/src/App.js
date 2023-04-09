import React, { useState } from "react"
// import Counter from "./components/Counter"
import "./components/styles/App.css"
import Post from "./components/Post"

function App() {

  const [post, postSet] = useState( [
    {id: 1, title: "Javascript 1", description: "Описание"},
    {id: 2, title: "Javascript 2", description: "Описание"},
    {id: 3, title: "Javascript 3", description: "Описание"},
  ])

  return (
    <div className="app">
      <Post/>
    </div>
  )
}

export default App;
