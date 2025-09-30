import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=> {
            props.setVehiclePanel(false);
          }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div onClick={()=>{
            props.setConfirmRidePanel(true);
            props.selectVechicle('car');
          }} className='flex mb-2 border-2 active:border-black  rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>{`₹ ${props.fare.car}`}</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRidePanel(true);
            props.selectVechicle('motorcycle');
          }} className='flex mb-2 border-2 active:border-black rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>{`₹ ${props.fare.motorcycle}`}</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRidePanel(true);
            props.selectVechicle('auto');
          }} className='flex mb-2 border-2 active:border-black rounded-xl w-full p-2 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>{`₹ ${props.fare.auto}`}</h2>
          </div>
    </div>
  )
}

export default VehiclePanel