import React from 'react';

const Comments = (props) => {
    return (
    <div className="comments post__content">
        <span className="commentsText">{props.comments.email}</span>
        <span className="secondaryText">{props.comments.body}</span>
    </div>
    );
};

export default Comments; 