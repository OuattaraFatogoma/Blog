import React from 'react'
import { Link } from 'react-router-dom';
import { format } from "date-fns";

function PostCard({title, summary, author, createdAt, cover, _id:id}) {
  const date = format(new Date(createdAt), "MMM dd, yyyy");
  
  return (
    <div className='postCard'>
      <div className='postBody'>
        <h4 className='title'>{title}</h4>
        <p className='summary'>{summary}</p>
        <div className='info'>
          <span>{author.username}</span>
          <span>{date}</span>
        </div>
      </div>
      <div className='postCover'>
        <Link to={`/post/${id}`}><img src={cover} alt={title} /></Link>
      </div>
    </div>
  )
}

export default PostCard