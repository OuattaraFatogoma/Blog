import React from 'react'
import PostCard from './PostCard'

function PostContainer() {
  return (
    <section className='postContainer'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </section>
  )
}

export default PostContainer