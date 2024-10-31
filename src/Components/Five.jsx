import React from 'react'

const Five = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center   w-full mobile:px-5'>
        <h1 className='text-2xl '>Roadster</h1>
        <p className='text-sm mt-2'>Reserve yours or sign up to get updates.</p>
        <button className='border-2 border-white px-12 py-2 rounded-sm hover:bg-white hover:text-black ease-in transition duration-200 mt-10 tracking-tighter text-sm'>Reserve Now</button>
        <button className=' px-12 py-2 rounded-sm text-white bg-[#393c41b5] hover:bg-[#393C41] ease-in transition duration-200 mt-5 tracking-tighter text-sm'>Get Updates</button>
        <p className='text-xs text-center text-[#C4C5C6] mt-28'>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation <br /> and voice commands. Access to features that use cellular data and third-party licenses are subject to <br /> change.
        <span className='underline underline-offset-4'> Learn more about Standard Connectivity and any limitations.</span>
        </p>
        <div className='laptop:flex mobile:grid mobile:text-center items-center justify-between gap-5 text-xs text-[#C4C5C6] mt-32 mb-5'>
            <p>Tesla © 2024 </p>
            <p>Private & Legal</p>
            <p>Vehicle Recalls</p>
            <p>Contact</p>
            <p>News</p>
            <p>Get Updates</p>
            <p>Location</p>
        </div>
    </div>
  )
}

export default Five