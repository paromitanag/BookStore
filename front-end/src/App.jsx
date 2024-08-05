import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import Contacts from './Components/Contacts/Contacts'
import Signup from './Components/Signup/Signup'
import About from './Components/About/About'


const App = () => {
  return (
    <div className=' dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App