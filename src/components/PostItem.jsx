import React from "react"
import {useNavigate} from "react-router-dom"

import DeleteButton from "./UI/button/delete/DeleteButton"
import MyButton from "./UI/button/MyButton"


const PostItem = (props) => {
  const router = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText maxPostText">{props.post.id}. {props.post.title}</span>
              <span className="secondaryText maxPostText">{props.post.body}</span>
            </div>
            <div className="post__delete">
              <MyButton onClick = {() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
              <DeleteButton onClick = {() => props.remove(props.post)}>Удалить</DeleteButton>
            </div>
      </div>
    )
}

export default PostItem

