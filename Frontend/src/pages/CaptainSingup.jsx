import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useEffect } from 'react';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  useEffect(() => {
  console.log("Captain updated:", captain);
}, [captain]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = ({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType
      }
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData, {
      headers: { "Content-Type": "application/json" }
    });

    if(response.status === 201){
      const data = response.data;
      // console.log("Signup response:", response.data);
      // console.log("Signup :", data);
      setCaptain(data.captain)
      // console.log(captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={submitHandler} action="">

          <h3 className="text-base mb-2 font-medium">What's your name</h3>
          <div className='flex gap-3 mb-3'>
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
            className='bg-[#eeeeee] mb-3 rounded px-2 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

          <h3 className="text-base mb-2 font-medium">Enter Password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} className='bg-[#eeeeee] mb-3 rounded px-2 py-2 border w-full text-lg placeholder:text-base' required placeholder='password' />

          <h3 className="text-base mb-2 font-medium">Vehicle Details</h3>
          <div className='flex gap-3'>
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] mb-3 w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
            />

            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] mb-3 w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate Number'
            />
          </div>
          <div className='flex gap-3'>
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] mb-3 w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
            />

            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] mb-3 w-1/2 rounded px-2 py-2 border  text-lg'
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] text-white mb-3 rounded px-2 py-2 w-full text-lg placeholder:text-base'>Create an Account</button>

          <p className='text-center mb-3'> Already have a Account?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div className='text-[10px] leading-tight '>
        <p>This site is protected by reCAPTCHA and the google <Link className='underline font-semibold'>Privacy Policy</Link> and <Link className='underline font-semibold' >Terms and Service</Link> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup