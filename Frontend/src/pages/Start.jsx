import React from 'react'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'> 
            <img className='w-16 ml-9' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
            <div className='bg-white py-5 px-10'>
                <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
                <Link className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2' to='/login' >Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start