import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './CurdCompons/Home';
import Create from './CurdCompons/Create';
import Update from './CurdCompons/Update';
import Read from './CurdCompons/Read';
const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/update' element={<Update/>} />
      <Route path='/read' element={<Read/>} />
    </Routes>
  
  )
}

export default App