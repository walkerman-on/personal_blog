import React from 'react';
import PostItem from './PostItem';

const ListItem = ({post, title, remove}) => {
    return (
        <div className='list'>
            <h1 className="primaryText postTitle">{title}</h1>
                {post.map((post, index) =>
                  <PostItem key = {post.id} remove = {remove} number = {index + 1} post = {post}/>
                )} 
        </div>
    );
};

export default ListItem;