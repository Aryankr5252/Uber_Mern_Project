import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-3 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-9-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="http://images.mobile-patterns.com/1398778977634-2014-04-29%2009.39.54.png" alt="" />

            </div>
            <div className='h-1/2 p-3'>

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

                {/* Actions */}
                <div className="flex justify-around py-4 border-t">
                    <button className="flex flex-col items-center text-sm text-gray-700">
                        <i classNa me="text-sm ri-shield-star-fill"></i>
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
                <button className='w-full mt-3 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
            </div>
        </div>
    )
}

export default Riding