import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './context';
import { Header, PostContainer, LoginForm, RegisterForm } from './components';
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
      </Routes>
    </>
  )
}

export default App
