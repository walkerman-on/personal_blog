import React from 'react';

const Comments = (props) => {
    return (
    <div className="post post__content">
        <span className="primaryText">{props.comments.email}</span>
        <span className="secondaryText">{props.comments.body}</span>
    </div>
    );
};

export default Comments; 