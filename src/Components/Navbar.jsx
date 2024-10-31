import React from 'react'
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
        <div className='mobile:w-full laptop:w-full h-14 flex items-center justify-between mobile:px-5 laptop:px-12'>
          <img className='w-[100px] h-3' src="src/assets/Tesla-Logo.png" alt="" />
        <div className="mobile:hidden laptop:flex laptop:items-center laptop:text-sm ">
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>Vehicles</button>
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>Energy</button>
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>Charging</button>
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>Discover</button>
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>Shop</button>
            <button className='px-4 py-[5.5px] rounded-[3.4px] bg-transparent hover:bg-black/5'>We, Robot</button>
        </div>
        <div className='mobile:hidden laptop:flex laptop:items-center laptop:justify-between laptop:gap-3'>
        <IoHelpCircleOutline className='w-7 h-7' />
        <SlGlobe  className='w-5 h-5' />
        <MdOutlineAccountCircle className='w-6 h-6' />
        </div>
        <button className='laptop:hidden mobile:px-3 mobile:py-1 bg-white/70 rounded-md'>Menu</button>
        </div>
    </div>
  )
}

export default Navbar