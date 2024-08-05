import React from 'react'
import Navbar from '../Navbar/Navbar'
import Course from '../Course/Course'
import Footer from '../Footer/Footer'

const Courses = () => {
  return (
    <>
   <Navbar/>
   <div className='min-h-screen'>
   <Course/>
   </div>
   <Footer/>
    
    </>
  )
}

export default Courses