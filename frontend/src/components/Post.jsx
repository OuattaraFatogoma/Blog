import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from "date-fns";
import { useGlobalContext } from '../context';


function Post() {
  const {user} = useGlobalContext();
  const url = "https://api-petitblogger.onrender.com/api/v1/posts/"
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  const fetchPost = async () =>{
    try {
      setIsLoading(true);
      const response = await axios.get(url+id);
      const post = response.data;
      setPost(post);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchPost();
  }, []) 

  if(isLoading) return "Loading...";
  const {title, author, createdAt, cover, content } = post;

  return (
    <section>
      <div className='post'>
        <h1>{title}</h1>
        <div className='container'>
          <div className='cover'>
            <img src={cover} alt={title} />
          </div>
          <div className='info'>
            <span>{author.username}</span>
            {
              user && (user.username === author.username && <Link to={`/editPost/${id}`}><button>Edit Post</button></Link>)
            }
            <span>{format(new Date(createdAt), "MMM dd, yyyy")}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html:content}} className='content'/>
      </div>
    </section>
  )
}

export default Post