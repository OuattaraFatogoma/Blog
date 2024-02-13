import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './context';
import { Header, PostContainer, LoginForm, RegisterForm, PostForm, Post } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<PostContainer/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/createPost' element={<PostForm isCreatePost={true}/>}/>
        <Route path='/editPost/:id' element={<PostForm isCreatePost={false}/>}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </>
  )
}

export default App
