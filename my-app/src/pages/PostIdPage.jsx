import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import Comments from "../components/Comments"
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='list'>
            <h1 className="primaryText postTitle">Выбранный пост ID = {params.id}</h1>
            {isLoading
                ? <div className = "loaderContainer"><Loader/></div>
                : <div className="post post__content">
                    <span className="primaryText">{post.title}</span>
                    <span className="secondaryText">{post.body}</span>
                  </div>
            }
            <h1 className="primaryText postTitle">Комментарии</h1>
            {isComLoading
                ? <div className = "loaderContainer2"><Loader/></div>
                : <div className= 'list'>
                    {comment.map((comm, index) => {
                        return (
                           <Comments comments = {comm} key = {index + 1}/>
                        )
  
                    })}
                  </div>
            }
        </div>
    );
};

export default PostIdPage; 