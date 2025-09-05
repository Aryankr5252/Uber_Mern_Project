import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div className='px-4'>
        {/* this is a just a sample data */}

        <div className='flex items-center justify-start gap-4 mb-4'>
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium leading-tight'>24B, Near jai Shree Bhagwat, rajnagar bgl wala</h4>
        </div>
        <div className='flex items-center justify-start gap-4 mb-4'>
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium leading-tight'>24B, Near jai Shree Bhagwat</h4>
        </div>
        <div className="fixed z-10">
            
        </div>

    </div>
  )
}

export default LocationSearchPanel