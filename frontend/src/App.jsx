import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './context';
import { Header, PostContainer, LoginForm, RegisterForm, PostForm } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Post} from './pages';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<PostContainer/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/createPost' element={<PostForm isCreatePost={true}/>}/>
        <Route path='/editPost' element={<PostForm isCreatePost={false}/>}/>
      </Routes>
    </>
  )
}

export default App
