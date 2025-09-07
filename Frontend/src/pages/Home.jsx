import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
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

  const submitHandler = (e) => {
    e.preventDefault();
  }

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

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        {/* {image for temporary use} */}
        <img className='h-full w-full object-cover' src="http://images.mobile-patterns.com/1398778977634-2014-04-29%2009.39.54.png" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className="h-[30%] p-6 bg-white relative">
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
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mb-3'
            type="text" 
            placeholder='Add a pick-up location' />
            <input 
            onClick={() => {
              setPanelOpen(true);
            }}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
            className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full'
            type="text" 
            placeholder='Enter your destination' />
          </form>
        </div>
        <div ref= {panelRef} className='  bg-white h-0 '>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
            
        </div>
      </div>
        <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12">
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>
        <div ref={confirmPanelRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />
        </div>
        <div ref={vehicleFoundRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>
        <div ref={waitingDriverRef} className="fixed w-full z-20 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
            <WaitingForDriver setWaitingDriver={setWaitingDriver} />
        </div>

    </div>
  )
}

export default Home