import React from 'react'
import { Link } from 'react-router-dom';

function PostCard() {
  const title = "I tasted the future of EV charging and it was delicious.";
  const summary = "Electrify America’s newest, indoor charging concept reimagines the electric vehicle experience for the better."
  const author = "Carter Gibson";
  const createdAt = "Feb 9, 2024";
  const cover = "https://miro.medium.com/v2/resize:fill:250:168/1*FEpjdpIyuKt9pmJOJD8IFw.jpeg"
  const id = "id";
  
  return (
    <div className='postCard'>
      <div className='postBody'>
        <h4 className='title'>{title}</h4>
        <p className='summary'>{summary}</p>
        <div className='info'>
          <span>{author}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <div className='postCover'>
        <Link to={`/post/${id}`}><img src={cover} alt={title} /></Link>
      </div>
    </div>
  )
}

export default PostCard