import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const title = "I tasted the future of EV charging and it was delicious.";
  const author = "Carter Gibson";
  const createdAt = "Feb 9, 2024";
  const cover = "https://miro.medium.com/v2/resize:fill:250:168/1*FEpjdpIyuKt9pmJOJD8IFw.jpeg"
  const content = "<h2>Some content</h2>";
  const contentContainer = useRef(null);
  const {id} = useParams();

  useEffect(()=>{
    contentContainer.current.innerHTML = content;
  }, [])

  return (
    <section>
      <div className='post'>
        <h1>{title}</h1>
        <div className='container'>
          <div className='cover'>
            <img src={cover} alt={title} />
          </div>
          <div className='info'>
            <span>{author}</span>
            <span>{createdAt}</span>
          </div>
        </div>
        <div ref={contentContainer} className='content'/>
      </div>
    </section>
  )
}

export default Post