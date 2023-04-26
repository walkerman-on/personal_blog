import React, {useState} from 'react';
import PostItem from './PostItem';

const ListItem = (props) => {
    const [posts, postSet] = useState( [
        {id: 1, title: "Javascript 1", description: "Описание"},
        {id: 2, title: "Javascript 2", description: "Описание"},
        {id: 3, title: "Javascript 3", description: "Описание"},
      ])


    return (
        <div className='list'>
            <h1 className="primaryText postTitle">{props.list.name} {props.list.id}</h1>
                {posts.map((post) =>
                  <PostItem post = {post}/>
                )} 
        </div>
    );
};

export default ListItem;