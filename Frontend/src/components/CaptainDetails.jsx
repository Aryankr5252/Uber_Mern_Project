import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
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
  )
}

export default CaptainDetails