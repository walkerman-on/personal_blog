import React, {useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import MySelect from "./components/UI/select/MySelect";

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

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
}


  return (
    <div className="app">
      <PostForm create = {createForm}/>
      <MySelect 
        defaultValue = "Сортировка"
        options = {[
          {name: "По названию", value: "title"},
          {name: "По описанию", value: "body"}
        ]}
      />
      {posts.length !== 0
      ? <ListItem remove = {removePost} post = {posts} title = "Список постов 1"/>
      : <div className="primaryText postTitle">Для создания поста введите название и описание поста</div>
      }
      
    </div>
  )
}

export default App;
