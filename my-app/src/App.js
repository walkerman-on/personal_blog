import React, {useEffect, useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
// import MyIcon from "./components/UI/icon/MyIcon";
import {usePosts} from "./hooks/usePosts"
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sorting: "", query: ""})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorting, filter.query)
  
  useEffect(() => {
    fetchPosts()
  }, [])

 //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
  setPosts(posts.filter(item => item.id !== post.id))
  }

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
  }

  return (
    <div className="app">
      <MyButton onClick = {fetchPosts}>GET POSTS</MyButton>
      {/* <MyIcon fill="#fff"/> */}
      <MyButton onClick = {() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible = {modal} setVisible = {setModal}>
        <PostForm create = {createForm}/>
      </MyModal>
      <PostFilter 
        filter = {filter} 
        setFilter={setFilter} 
      />
      <ListItem 
          remove = {removePost} 
          post = {sortedAndSearchedPosts} 
          title = "Список постов"
      />
    </div>
  )
}

export default App;
