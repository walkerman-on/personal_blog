import React, {useState, useMemo} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
// import MyIcon from "./components/UI/icon/MyIcon";

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: "Практика", description: "Необходимо взять функциональную схему автоматизации (ФСА), узнать про технологический объект"},
    {id: 2, title: "Курсы", description: "Каждый день после практики мне нужно смотреть курсы по React.js и совершенствоваться"},
    {id: 3, title: "Море", description: "По выходным буду ходить на море, чтобы отдохнуть и получить хороший загар и эмоции"},
  ])

  //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
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

  const [modal, setModal] = useState(false);

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
      <ListItem 
          remove = {removePost} 
          post = {sortedAndSearchedPosts} 
          title = "Список постов"
      />
    </div>
  )
}

export default App;
