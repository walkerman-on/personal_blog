import React, {useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm"

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: "Javascript 1", description: "Описание"},
    {id: 2, title: "Javascript 2", description: "Описание"},
    {id: 3, title: "Javascript 3", description: "Описание"},
  ])

  //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="app">
      <PostForm create = {createForm}/>
      <ListItem post = {posts} title = "Список постов 1"/>
    </div>
  )
}

export default App;
