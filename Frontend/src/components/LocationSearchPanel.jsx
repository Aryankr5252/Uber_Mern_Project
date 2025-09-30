import React from 'react'

const LocationSearchPanel = ({ suggestions, onSelect, setPanelOpen, setVehiclePanel }) => {
  // suggestions passed from parent component

  return (
    <div className='px-4'>
        {suggestions.map((element, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                // set selected value in parent
                onSelect(element.description);
                // setPanelOpen(false);
                // setVehiclePanel(true);
              }}
              className='flex border-2 p-2 border-gray-50 active:border-black rounded-xl items-center w-full justify-start gap-4 my-2'
            >
              <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'>
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className='font-medium leading-tight w-5/6'>{element.description}</h4>
            </div>
          )
        })}

    </div>
  )
}

export default LocationSearchPanel