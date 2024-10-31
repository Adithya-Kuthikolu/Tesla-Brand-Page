import React from 'react'

const Four = () => {
  return (
      <div>
        
        <div className='laptop:px-48 mobile:px-5 mobile:-mt-24 laptop:mt-16 text-white flex flex-col'>
            <h1 className=' text-3xl tracking-tighter mobile:whitespace-nowrap mobile:text-[1.7rem] mobile:font-semibold laptop:font-normal'>Tesla Semi & Roadster Unveil</h1>
            <hr className='mt-10 h-0.5' />
            <h1 className='text-2xl tracking-tighter mt-28 mobile:mt-12 mobile:text-xl'>Roadster Specs</h1>
            <h1 className='text-xl mb-5 mt-20 mobile:text-lg mobile:mt-8'>Drive</h1>
            <div className='w-[100%]  h-40 mobile:hidden laptop:block '>
                <div className='flex h-[50%]'>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 0-60 mph</h2>
                        <p className='text-sm'>1.9 s</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 0-100 mph</h2>
                        <p className='text-sm'>4.2 s</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 1/4 mile</h2>
                        <p className='text-sm'>8.8 s</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Top Speed</h2>
                        <p className='text-sm'>Over 250 mph</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Wheel Torque</h2>
                        <p className='text-sm'>10,000 Nm</p>
                    </div>
                </div>
                <div className='flex h-[50%]'>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Mile Range</h2>
                        <p className='text-sm'>620 miles</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Seating</h2>
                        <p className='text-sm'>4</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Drive</h2>
                        <p className='text-sm'>All-Wheel Drive</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'>Base Reservation</h2>
                        <p className='text-sm'>$50,000</p>
                    </div>
                    <div className=' w-full '>
                        <h2 className='text-sm text-[#8E8E8E]'></h2>
                        <p className='text-sm'></p>
                    </div>
                    
                </div>
            </div>
            <div className='w-full h-[45vh] mobile:flex laptop:hidden'>
                <div className='w-1/2 h-full  flex flex-col'>
                    <div className=' w-full h-[25%] bg-black'>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 0-60 mph</h2>
                        <p className='text-sm'>1.9 s</p>
                    </div>
                    <div className=' w-full h-[25%] '>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 1/4 mile</h2>
                        <p className='text-sm'>8.8 s</p>
                    </div>
                    <div className=' w-full h-[25%] '>
                        <h2 className='text-sm text-[#8E8E8E]'>Wheel Torque</h2>
                        <p className='text-sm'>10,000 Nm</p>
                    </div>
                    <div className=' w-full  h-[25%]'>
                        <h2 className='text-sm text-[#8E8E8E]'>Seating</h2>
                        <p className='text-sm'>4</p>
                    </div>
                    <div className=' w-full  h-[25%]'>
                        <h2 className='text-sm text-[#8E8E8E]'>Base Reservation</h2>
                        <p className='text-sm'>$50,000</p>
                    </div>
                </div>
                <div className='w-1/2 h-full  flex flex-col'>
                <div className=' w-full h-[25%] bg-black'>
                        <h2 className='text-sm text-[#8E8E8E]'>Acceleration 0-100 mph</h2>
                        <p className='text-sm'>1.9 s</p>
                    </div>
                    <div className=' w-full h-[25%] '>
                        <h2 className='text-sm text-[#8E8E8E]'>Top Speed</h2>
                        <p className='text-sm'>Over 250 mph</p>
                    </div>
                    <div className=' w-full h-[25%] '>
                        <h2 className='text-sm text-[#8E8E8E]'>Mile Range</h2>
                        <p className='text-sm'>620 miles</p>
                    </div>
                    <div className=' w-full  h-[25%]'>
                        <h2 className='text-sm text-[#8E8E8E]'>Drive</h2>
                        <p className='text-sm'>All Wheel Drive</p>
                    </div>
                    <div className=' w-full  h-[25%]'>
                        <h2 className='text-sm text-[#8E8E8E]'></h2>
                        <p className='text-sm'></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Four