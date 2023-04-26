import React from "react"

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText">{props.post.id}. {props.post.title}</span>
              <span className="secondaryText">{props.post.description}</span>
        
            </div>
            <div className="post__delete">
              <button className="delete-button">
                <span className="primaryText button-text">Удалить</span>
              </button>
            </div>
      </div>
    )
}

export default PostItem

