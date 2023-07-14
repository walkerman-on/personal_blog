import React from "react"
// import MyButton from "./UI/button/MyButton"
import DeleteButton from "./UI/button/delete/DeleteButton"

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText maxPostText">{props.number}. {props.post.title}</span>
              <span className="secondaryText">{props.post.body}</span>
            </div>
            <div className="post__delete">
            <DeleteButton onClick = {() => props.remove(props.post)}><span className = "deleteBtn">+</span></DeleteButton>
            </div>
      </div>
    )
}

export default PostItem

