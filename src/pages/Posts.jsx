import React, {useEffect, useState, useRef} from "react"
import "../components/styles/App.css"
import ListItem from "../components/ListItem";
import PostForm from "../components/PostForm"
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal"
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader"
import ErrorMessage from "../components/UI/errorMessage/ErrorMessage"
import Pagination from "../components/Pagination";
// import MyIcon from "../components/UI/icon/MyIcon";

import PostService from "../API/PostService";

import {usePosts} from "../hooks/usePosts"
import {useFetching} from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import {getPageCount} from "../utils/pages"
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sorting: "", query: ""})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorting, filter.query);
  const lastElement = useRef()

  const [fetchPosts, IsPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, IsPostsLoading, () => {
      setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])
  
 //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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
        setFilter = {setFilter} 
      />
      <MySelect
        value = {limit}
        onChange = {value => setLimit(value)}
        defaultValue = "Кол-во элементов на странице"
        options = {[
          {value: 10, name: "10"},
          {value: 25, name: "25"},
          {value: 50, name: "50"},
          {value: -1, name: "Показать всё"}
        ]}
      />
      {postError &&
        <ErrorMessage textError = {postError}/>
      }
      <ListItem 
           remove = {removePost} 
           post = {sortedAndSearchedPosts} 
           title = "Список постов"
       />
       <div ref = {lastElement}></div>
      {IsPostsLoading &&
        <div className = "loaderContainer"><Loader/></div>
      }
      <Pagination page = {page} changePage = {changePage} totalPages = {totalPages}/>
    </div>
  )
}

export default Posts;
