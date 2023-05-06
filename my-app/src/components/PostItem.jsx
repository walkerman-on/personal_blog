import React from "react"
import MyButton from "./UI/button/MyButton"

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText">{props.number}. {props.post.title}</span>
              <span className="secondaryText">{props.post.body}</span>
            </div>
            <div className="post__delete">
            <MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton>
            </div>
      </div>
    )
}

export default PostItem

