import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from '../component/View'
import Home from '../component/Home'
import Show from '../component/Show'
import Registration from '../component/Registration'
import Login from '../component/Login'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='view' element={<View/>}/>
            <Route path="show-user" element={<Show/>}/>
            <Route path='registration' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing