import React from "react"

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
              <span className="primaryText">1. JavaScript</span>
              <span className="secondaryText">JavaScript - язык программирования</span>
        
            </div>
            <div className="post__delete">
              <button className="delete-button">
                <span className="primaryText button-text">Удалить</span>
              </button>
            </div>
      </div>
    )
}

export default Post

