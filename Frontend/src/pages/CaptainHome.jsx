import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
     <div className='h-screen'>
            <div className='w-screen fixed p-3 top-0 flex items-center justify-between'>
              <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
              <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
              </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="http://images.mobile-patterns.com/1398778977634-2014-04-29%2009.39.54.png" alt="" />

            </div>
            <div className='h-2/5 p-6'>

                
                {/* <div className="flex items-center px-4 py-3 space-x-3">
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

                
                <div className="px-4 py-3 border-t">
                    <p className="font-bold text-gray-800">562/11-A</p>
                    <p className="text-sm text-gray-600">
                        Kaikondrahalli, Bengaluru, Karnataka
                    </p>
                </div> */}

                  <div  className='flex justify-between items-center my-2'>
                    <div className='flex justify-start items-center gap-4'>
                      <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/LPZ1-YYZW_6kxNdoX1nKNPpQu0zjFZtP9gWhftb0pgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzYx/Lzg4LzZmNjE4ODdj/ZDU4OTFkMDJiNDQz/YmNjOWJhMjhlMmUy/LmpwZw" alt="" />
                      <h4 className='text-lg font-medium'>Harsh Patel</h4>
                    </div>
                    <div>
                      <h4 className='text-xl font-semibold'>$24.6</h4>
                      <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-start p-3 mt-6 bg-gray-100 rounded-xl gap-4'>
                    <div className='text-center'>
                      <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
                      <h5 className='text-lg font-medium'>10.2</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                      <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                      <h5 className='text-lg font-medium'>30k</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                      <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                      <h5 className='text-lg font-medium'>10.2</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                  </div>

            </div>
        </div>
  )
}

export default CaptainHome