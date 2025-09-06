import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null)

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
        <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-8">
          <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div className='flex mb-2 border-2 active:border-black  rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$193.50</h2>
          </div>
          <div className='flex mb-2 border-2 active:border-black rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$13.50</h2>
          </div>
          <div className='flex mb-2 border-2 active:border-black rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>$13.50</h2>
          </div>
        </div>

    </div>
  )
}

export default Home