import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useEffect } from 'react';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = ({
      email: email,
      password: password
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain)
      console.log(data)
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    // console.log(captain)
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={submitHandler} action="">
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>
          <input required value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base' required placeholder='password' />
          <button className='bg-[#111] text-white mb-3 rounded px-2 py-2 w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>Join a fleet?<Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[#c2af07] flex items-center justify-center text-white mb-7  rounded px-2 py-2 w-full text-lg placeholder:text-base'>SignIn As User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin;