import React, {useState, useMemo} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter";

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: "Практика", description: "Необходимо взять функциональную схему автоматизации (ФСА), узнать про технологический объект"},
    {id: 2, title: "Курсы", description: "Каждый день после практики мне нужно смотреть курсы по React.js и совершенствоваться"},
    {id: 3, title: "Море", description: "По выходным буду ходить на море, чтобы отдохнуть и получить хороший загар и эмоции"},
  ])

  //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
}

  const [filter, setFilter] = useState({sorting: "", query: ""})

  const sortedPosts = useMemo(() => {
    if (filter.sorting) {
      [...posts].sort((a,b) => a[filter.sorting].localeCompare(b[filter.sorting]))
    }
    return posts
  }, [filter.sorting, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className="app">
      <PostForm create = {createForm}/>
      <PostFilter 
        filter = {filter} 
        setFilter={setFilter} 
      />
      {sortedAndSearchedPosts.length !== 0
      ? <ListItem 
          remove = {removePost} 
          post = {sortedAndSearchedPosts} 
          title = "Список постов"
        />
      : <div className="primaryText postTitle">Посты <span className="primaryText">не найдены!</span></div>
      }
    </div>
  )
}

export default App;
