import React from 'react';
import PostItem from './PostItem';

const ListItem = ({post, title}) => {
    return (
        <div className='list'>
            <h1 className="primaryText postTitle">{title}</h1>
                {post.map((post) =>
                  <PostItem post = {post}/>
                )} 
        </div>
    );
};

export default ListItem;