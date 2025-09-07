import React from 'react'

const WaitingForDriver = (props) => {
  return (
     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border">
        <h5 onClick={() => {
                props.setWaitingDriver(false);
            }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <p className="text-sm font-medium">Meet at the pickup point</p>
        <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded">
          2 min
        </div>
      </div>

      {/* Driver Info */}
      <div className="flex items-center px-4 py-3 space-x-3">
        <img
          src="https://imgs.search.brave.com/sk1Ces5ER8bzEcy9WXDVCoTwByL-iRmPaKjWPWq3t6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC81MDUtNTA1ODU2/MF9wZXJzb24tcGxh/Y2Vob2xkZXItaW1h/Z2UtZnJlZS1oZC1w/bmctZG93bmxvYWQu/cG5n"
          alt="Driver"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-xs text-gray-500 font-medium">SANTH</p>
          <p className="text-lg font-bold">KA15AK00-0</p>
          <p className="text-sm text-gray-600">
            White Suzuki S-Presso LXI • ⭐ 4.9
          </p>
        </div>
      </div>

      {/* Message box */}
      <div className="px-4 mb-3">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-around py-4 border-t">
        <button className="flex flex-col items-center text-sm text-gray-700">
          <i className="text-sm ri-shield-star-fill"></i>
          Safety
        </button>
        <button className="flex flex-col items-center text-sm text-gray-700">
          <i className="text-sm ri-map-pin-fill"></i>
          Share my trip
        </button>
        <button className="flex flex-col items-center text-sm text-gray-700">
          <i className="text-sm ri-phone-fill"></i>
          Call driver
        </button>
      </div>

      {/* Location */}
      <div className="px-4 py-3 border-t">
        <p className="font-bold text-gray-800">562/11-A</p>
        <p className="text-sm text-gray-600">
          Kaikondrahalli, Bengaluru, Karnataka
        </p>
      </div>
    </div>
  )
}

export default WaitingForDriver