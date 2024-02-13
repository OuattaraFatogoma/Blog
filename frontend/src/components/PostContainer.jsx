import React from 'react'
import PostCard from './PostCard'
import { useGlobalContext } from '../context'

function PostContainer() {
  const {posts, isLoading} = useGlobalContext();
  if (isLoading) return "Loading...";
  return (
    <section className='postContainer'>
      {
        posts.map(post => <PostCard {...post} key={post._id}/>)
      }
    </section>
  )
}

export default PostContainer