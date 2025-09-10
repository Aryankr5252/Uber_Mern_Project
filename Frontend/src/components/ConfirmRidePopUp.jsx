import React from 'react'

const ConfirmRidePopUp = (props) => {
  return (
    <div className="h-screen max-w-sm mx-auto relative bg-white rounded-2xl shadow-lg p-4 space-y-4">
      {/* Header */}
      <h5 onClick={() => {
                props.setRidePopupPanel(false);
            }} className='p-1 text-center w-[93%] absolute -top-1 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <div className="flex bg-yellow-500 rounded-lg p-3 items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://imgs.search.brave.com/LPZ1-YYZW_6kxNdoX1nKNPpQu0zjFZtP9gWhftb0pgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzYx/Lzg4LzZmNjE4ODdj/ZDU4OTFkMDJiNDQz/YmNjOWJhMjhlMmUy/LmpwZw"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Esther Berry</h3>
            <div className="flex space-x-2 mt-1">
              <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-lg">
                ApplePay
              </span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-lg">
                Discount
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg text-gray-900">$25.00</p>
          <p className="text-xs text-black">2.2 km</p>
        </div>
      </div>

      {/* Pickup & Drop */}
      <div className="space-y-3">
        <div>
          <p className="uppercase text-xs text-gray-400 font-medium">Pick Up</p>
          <p className="text-sm font-medium text-gray-700">
            7958 Swift Village
          </p>
        </div>
        <div>
          <p className="uppercase text-xs text-gray-400 font-medium">Drop Off</p>
          <p className="text-sm font-medium text-gray-700">
            105 William St, Chicago, US
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-2">
        <button onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
            }} className="px-5 py-2 rounded-xl border border-red-800 text-white font-medium bg-red-500">
          Cancel
        </button>
        <button className="px-5 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-yellow-500 shadow">
          Accept
        </button>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp