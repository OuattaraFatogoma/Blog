import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './context';
import { Header, PostContainer } from './components';
import { Home, Post} from './pages';

function App() {
  return (
    <>
      <Header/>
      <PostContainer/>
    </>
  )
}

export default App
