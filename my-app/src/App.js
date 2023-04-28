import React, {useState, useRef} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPost] = useState( [
    {id: 1, title: "Javascript 1", description: "Описание"},
    {id: 2, title: "Javascript 2", description: "Описание"},
    {id: 3, title: "Javascript 3", description: "Описание"},
  ])

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPost([...posts, newPost])
    setTitle("")
    setBody("")
  }

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")


  return (
    <div className="app">
      <form className="formMain">
        <MyInput
            value = {title}
            onChange = {event => setTitle(event.target.value)}
            type = "text" 
            placeholder="Название поста"/>
        <MyInput
            value = {body}
            onChange = {event => setBody(event.target.value)}
            type = "text" 
            placeholder="Описание поста"/>
      
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <ListItem post = {posts} title = "Список постов 1"/>
    </div>
  )
}

export default App;
