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
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sorting: "", query: ""})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorting, filter.query);

  let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, IsPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
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
        ? <div className = "loaderContainer"><Loader/></div>
        : <ListItem 
          remove = {removePost} 
          post = {sortedAndSearchedPosts} 
          title = "Список постов"
          />
      }
      <div className = "pageNumber">
        {pagesArray.map(number => 
          // <span className = {page === number ? "page page__current" : "page"}>{number}</span>
          <MyButton className = {page === number ? "page__current" : "scsc"}>{number}</MyButton>
        )}
      </div>
    </div>
  )
}

export default App;
