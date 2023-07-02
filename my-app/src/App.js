import React, {useState} from "react"
import "./components/styles/App.css"
import ListItem from "./components/ListItem";
import PostForm from "./components/PostForm"
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: "«Краснодар» одержал победу над «Крыльями Советов» в матче РПЛ, играя в большинстве с 32-й минуты.", description: "Описание"},
    {id: 2, title: "Один из самых успешных певцов в мире войдет в Зал славы рок-н-ролла.", description: "Описание"},
    {id: 3, title: "Звезду фильма Челюсти Ричарда Дрейфусса тошнит от новых правил Оскара.", description: "Описание"},
  ])

  //Функция обратного вызова в PostForm
  const createForm = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
}

  const [selectedSort, setSelectedSort] = useState("")

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="app">
      <PostForm create = {createForm}/>
      <div className = "">
        <MyInput
          placeholder = "Поиск..."
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
        />
        <MySelect 
          value = {selectedSort}
          onChange={sortPosts}
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
    </div>
  )
}

export default App;
