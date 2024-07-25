
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Homepage from './Homepage'
import Login from './loginn'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routing