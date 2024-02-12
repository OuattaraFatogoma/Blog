import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './context';
import { Header } from './components';
import { Home, Post} from './pages';

function App() {
  return (
    <>
      <Header/>
    </>
  )
}

export default App
