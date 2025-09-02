import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = ({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser, {
      headers: { "Content-Type": "application/json" }
    });

    if (response.status === 201) {
      const data = response.data;

      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={submitHandler} action="">

          <h3 className="text-base mb-2 font-medium">What's your name</h3>
          <div className='flex gap-3 mb-5'>
            <input required
              value={firstname} onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-sm' type="text"
              placeholder='Firstname' />

            <input value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base' type="text"
              placeholder='Lastname' />
          </div>

          <h3 className="text-base mb-2 font-medium">What's your email</h3>
          <input required
            value={email} onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

          <h3 className="text-base mb-2 font-medium">Enter Password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} className='bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base' required placeholder='password' />

          <button className='bg-[#111] text-white mb-3 rounded px-2 py-2 w-full text-lg placeholder:text-base'>Create an Account</button>

          <p className='text-center'> Already have a Account?<Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div className='text-[10px] leading-tight'>
        <p>This site is protected by reCAPTCHA and the google <Link className='underline font-semibold'>Privacy Policy</Link> and <Link className='underline font-semibold' >Terms and Service</Link> apply.</p>
      </div>
    </div>
  )
}

export default UserSignup