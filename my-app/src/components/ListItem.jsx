import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListItem = ({post, title, remove}) => {

    if (!post.length) {
        return (
            <div className="primaryText postTitle">Посты <span className="primaryText">не найдены!</span></div>
        )
    }
    return (
        <div className='list'>
            <h1 className="primaryText postTitle">{title}</h1>
            <TransitionGroup className = "list">
                {post.map((post, index) =>
                    <CSSTransition
                        key = {post.id}
                        timeout = {250}
                        classNames = "post"
                    >
                    <PostItem  remove = {remove} number = {index + 1} post = {post}/>
                    </CSSTransition>
                )} 

            </TransitionGroup>
        </div>
    );
};

export default ListItem; 