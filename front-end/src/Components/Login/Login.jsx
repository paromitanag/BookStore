import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg  dark:text-slate-900 dark:bg-white">Login</h3>
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
      <button className='bg-cyan-500 text-white rounded-md px-3 py-1 hover:bg-cyan-700 duration-200 '>Login</button>
      <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link >{""}
      </p>
    </div>
  </div>
</dialog>

    </div>
    </>
  )
}
export default Login