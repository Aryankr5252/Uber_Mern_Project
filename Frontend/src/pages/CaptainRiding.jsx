import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finsihRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finsihRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finsihRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen relative'>
            <div className='w-screen fixed p-3 top-0 flex items-center justify-between'>
                <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/T0VXSFrdyIT5-Y9OAVxQARtPPUFioFUA9Ub1O3ROhEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/ODM5NDA5My92ZWN0/b3IvcGVyc29uLXVz/aW5nLWEtcmlkZS1z/aGFyaW5nLXRlY2hu/b2xvZ3ktbW9iaWxl/LWFwcGxpY2F0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oTUFRTlVEOHFJ/QUd6NmtNNktTNFhZ/LXdXME9KOXlWLTMw/SXlYNS15dFdnPQ" alt="" />

            </div>
            <div className='h-1/5 relative p-6 flex items-center justify-between bg-yellow-400'
            onClick={()=>{
                setFinishRidePanel(true);
            }}
            >
                <h5 onClick={() => {

                }} className='p-1 text-center w-[86%] absolute -top-1 '><i className="text-3xl text-black ri-arrow-up-wide-fill"></i></h5>
                <h4 className='text-xl font-semibold'>4KM away</h4>
                <button className="px-5 py-2 rounded-xl bg-green-600 text-white font-semibold shadow">Complete Ride</button>
            </div>
            <div ref={finsihRidePanelRef} className="fixed w-full z-40 h-screen  bg-white bottom-0 px-3 py-6 ">
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding