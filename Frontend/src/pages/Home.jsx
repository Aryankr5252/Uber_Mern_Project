import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null); // 'pickup' or 'destination'
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmPanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const waitingDriverRef = useRef(null)
  const [waitingDriver, setWaitingDriver] = useState(false)
  const [fare, setFare] = useState({});
  const [vechicleType, setVechicleType] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  // Fetch suggestions from backend based on input
  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: value },
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`  
        }
      });
      setSuggestions(response.data);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setSuggestions([]);
    }
  };

  const handleSelect = (location) => {
    if (activeInput === 'pickup') {
      setPickup(location);
    } else if (activeInput === 'destination') {
      setDestination(location);
    }
    setSuggestions([]);
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height: '70%',
      // opacity:1
    })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
      height: '0%',
      padding: '16px',
      // opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen, panelCloseRef])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [vehiclePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(vehicleFoundRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmPanelRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(confirmPanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(waitingDriver){
      gsap.to(waitingDriverRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(waitingDriverRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [waitingDriver])

  async function findTrip(){
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(response.data.fare);
    console.log(response.data)
  }

  async function createRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup, destination, vechicleType
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
    console.log(response.data)
  }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        {/* {image for temporary use} */}
        <img className='h-full w-full object-cover' src="http://images.mobile-patterns.com/1398778977634-2014-04-29%2009.39.54.png" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className="h-[34%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick= {() => {
            setPanelOpen(false);
          }}
           className='absolute opacity-0 top-1 left-3 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold mb-1'>Find a Trip</h4>
          <form action="" onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-14 w-0.5 top-[40%] left-8 rounded-full bg-gray-900"></div>
            <input 
            onClick={() => {
              setPanelOpen(true);
              setActiveInput('pickup');
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value);
              setActiveInput('pickup');
              fetchSuggestions(e.target.value);
            }}
            className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mb-3'
            type="text" 
            placeholder='Add a pick-up location' />
            <input 
            onClick={() => {
              setPanelOpen(true);
              setActiveInput('destination');
            }}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value);
              setActiveInput('destination');
              fetchSuggestions(e.target.value);
            }}
            className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full'
            type="text" 
            placeholder='Enter your destination' />
          </form>
          <button onClick={findTrip} className='bg-black text-white w-full py-3 rounded-lg mt-4'>
            Find Trip
          </button>
        </div>
        <div ref= {panelRef} className=' bg-white h-0 '>
            <LocationSearchPanel
              suggestions={suggestions}
              onSelect={handleSelect}
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
            
        </div>
      </div>
        <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12">
          <VehiclePanel selectVechicle={setVechicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>
        <div ref={confirmPanelRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <ConfirmedRide fare={fare} vechicleType={vechicleType} pickup={pickup} destination={destination} createRide={createRide} setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />
        </div>
        <div ref={vehicleFoundRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <LookingForDriver fare={fare} vechicleType={vechicleType} pickup={pickup} destination={destination} setVehicleFound={setVehicleFound} />
        </div>
        <div ref={waitingDriverRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <WaitingForDriver setWaitingDriver={setWaitingDriver} />
        </div>

    </div>
  )
}

export default Home