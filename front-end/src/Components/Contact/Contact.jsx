import React from 'react'
import call from '../../assets/call.jpg'
import map from '../../assets/map.png'
import mail from '../../assets/mail_icon.png'


const Contact = () => {
  return (
    <>
    <div className='antialiased bg-gray-100'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 bg-cyan-700 w-full max-w-6xl
        sm:p-12 p-8 rounded-xl shadow-lg text-white overflow-hidden mt-20'>
          <div className='flex flex-col space-y-8 justify-between'>
              <div>
                <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                <p className='pt-2 text-cyan-100 text-sm'>Lorem ipsum elit. Enim  eius molestias blanditiis recusandae cum inventore,  nihil laboriosam!</p>
              </div>
              <div className='flex flex-col space-y-6'>
                <div className='inline-flex space-x-2 items-center'>
                  <img src={call} alt="" className='w-[40px]'/>
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>
              <div>
                <div className='inline-flex space-x-2 items-center'>
                <img src={mail} alt="" className='w-[40px]'/>
                  <span>bookstore434@gmail.com</span>
                </div>
              </div>
              <div>
                <div className='inline-flex space-x-2 items-center'>
                <img src={map} alt="" className='w-[40px]'/>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
              </div>
              <div></div>
          </div>
          <div className='relative'>
            <div className='absolute z-0 w-60 h-60 bg-teal-400 rounded-full -right-20 -top-20'></div>
            <div className='absolute z-0 w-60 h-60 bg-teal-400 rounded-full -left-20 -bottom-20'></div>
            <div className='absolute z-0 w-60 h-60 bg-teal-400 rounded-full right-110 top-110'></div>
              <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-90'>
                <form action="" className='flex flex-col space-y-4'>
                  <div>
                    <label className='text-sm'>Your name</label>
                  
                    <input type="text" placeholder='Your name ' className='ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>
                  <div>
                    <label className='text-sm'>Email address</label>
                  
                    <input type="email" placeholder='Your email ' className='ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>
                  <div>
                    <label className='text-sm'>Message</label>
                  
                   <textarea name="" id="" rows='4' placeholder='Message '  className='ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                  </div>
                    <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                      send Message
                    </button>

                </form>
              </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Contact