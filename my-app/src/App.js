import React, {useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, postSet] = useState( [
    {id: 1, title: "Javascript 1", description: "Описание"},
    {id: 2, title: "Javascript 2", description: "Описание"},
    {id: 3, title: "Javascript 3", description: "Описание"},
  ])

  return (
    <div className="app">
      <form className="formMain">
        <MyInput type = "text" placeholder="Название поста"/>
        <MyInput type = "text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <ListItem post = {posts} title = "Список постов 1"/>
    </div>
  )
}

export default App;
