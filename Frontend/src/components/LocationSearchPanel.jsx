import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near jai Shree Bhagwat, rajnagar bgl wala",
    "24B, Near jai Shree Bhagwat",
  ];

  return (
    <div className='px-4'>
        {/* this is a just a sample data */}

        {
          locations.map((element) => {
            return <div onClick={()=>{
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }} className='flex border-2 p-2 border-gray-50 active:border-black rounded-xl items-center w-full justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium leading-tight w-5/6'>{element}</h4>
        </div>
          })
        }
        

    </div>
  )
}

export default LocationSearchPanel