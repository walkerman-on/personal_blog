import React, {useEffect, useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader"
import ErrorMessage from "./components/UI/errorMessage/ErrorMessage"
// import MyIcon from "./components/UI/icon/MyIcon";
import {usePosts} from "./hooks/usePosts"
import PostService from "./API/PostService";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sorting: "", query: ""})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorting, filter.query);
  const [fetchPosts, IsPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

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

  return (
    <div className="app">
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
      {postError &&
        <ErrorMessage textError = {postError}/>
      }
      {IsPostsLoading 
        ? <div style = {{position: "absolute",top: "50%", left: "50%", marginRight: "-50%",transform:" translate(-50%, -50%)" }}><Loader/></div>
        : <ListItem 
          remove = {removePost} 
          post = {sortedAndSearchedPosts} 
          title = "Список постов"
          />
      }
    </div>
  )
}

export default App;
