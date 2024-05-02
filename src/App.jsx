import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Itens from './pages/Itens/Itens'
import Edit from './pages/Edit/Edit'
import Boxpc from './pages/BoxPC/Boxpc'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/produto' element={<Itens/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/boxpc' element={<Boxpc/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
