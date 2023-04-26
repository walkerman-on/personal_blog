import React, {useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";

function App() {

  const [lists, setList] = useState([
    {id:1, name: "Список постов"},
    {id:2, name: "Список постов"},
    {id:3, name: "Список постов"},
  ])

  return (
    <div className="app">
     {lists.map((list) =>
       <ListItem list = {list} />
     )}
    </div>
  )
}

export default App;
