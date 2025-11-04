import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import NotFound from './assets/pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App