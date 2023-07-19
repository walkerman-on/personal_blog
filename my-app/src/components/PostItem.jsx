import React from "react"
import DeleteButton from "./UI/button/delete/DeleteButton"

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText maxPostText">{props.post.id}. {props.post.title}</span>
              <span className="secondaryText">{props.post.body}</span>
            </div>
            <div className="post__delete">
              <DeleteButton onClick = {() => props.remove(props.post)}>Удалить</DeleteButton>
            </div>
      </div>
    )
}

export default PostItem

