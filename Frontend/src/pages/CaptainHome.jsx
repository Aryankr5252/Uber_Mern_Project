import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(ridePopupPanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
      transform: 'translateY(0)'
    })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [confirmRidePopupPanel])

  return (
     <div className='h-screen'>
            <div className='w-screen fixed p-3 top-0 flex items-center justify-between'>
              <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
              <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
              </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="http://images.mobile-patterns.com/1398778977634-2014-04-29%2009.39.54.png" alt="" />

            </div>
            <div className='h-2/5 p-6'>   
                <CaptainDetails/>
            </div>
            <div ref={ridePopupPanelRef} className="fixed w-full z-40  bg-white bottom-0 px-3 py-6 ">
              <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>
            <div ref={confirmRidePopupPanelRef} className="fixed h-screen w-full z-50 bg-white bottom-0 px-3 py-6 ">
              <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
            </div>
        </div>
  )
}

export default CaptainHome