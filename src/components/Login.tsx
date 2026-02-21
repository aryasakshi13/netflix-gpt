import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute' >
        <img 
        src ="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
        alt="logo"
        />
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-20 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='py-4 text-white text-3xl'>Sign In</h1>
        <input type ="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type ="text" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700 '/>
        <button className='p-4 my-4 bg-red-700 text-white justify-center w-full rounded-lg'>Sign In</button>
      </form>
    </div>
  )

}

export default Login
