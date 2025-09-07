import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehicleFound(false);
            }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

            <div className='flex flex-col justify-between gap-2 items-center'>
                <img className='h-28' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" />
                <div className='w-full mt-3'>
                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, mumbai</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="text-sm ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, mumbai</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <i className=" text-sm ri-cash-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$19.20</h3>
                            <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default LookingForDriver