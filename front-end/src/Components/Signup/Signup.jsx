import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'

const Signup = () => {
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px">
  <div className="modal-box w-[500px]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg dark:text-slate-900 dark:bg-white">Signup</h3>
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text"
      placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email"
      placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password"
      placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around mt-4'>
      <button className='bg-cyan-500 text-white rounded-md px-3 py-1 hover:bg-cyan-700 duration-200'>Signup</button>
      <p className='text-xl'>Have account? <button  className='underline text-blue-500 cursor-pointer'
      onClick={()=>
        document.getElementById("my_modal_3").showmodal()
      }>
      Login
      </button >{""}
      <Login/>
      </p>
    </div>

  </div>
</div>
    </div>
    </>
  )
}

export default Signup