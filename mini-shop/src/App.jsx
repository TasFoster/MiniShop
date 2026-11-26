import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Button from './component/Button'
import imgTest from "./pages/assets/q.png"
import Header from './component/Header'
import Footer from './component/Footer'
import Catalog from './pages/Catalog'
import Basket from './pages/Basket'
import PageGoods from './pages/PageGoods'


function App() {
  return(
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Catalog></Catalog>}></Route>
        <Route path='/basket' element={<Basket></Basket>}></Route>
        <Route path='/page-goods' element={<PageGoods></PageGoods>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
