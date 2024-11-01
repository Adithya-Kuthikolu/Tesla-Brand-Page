import React from 'react'
import { motion } from 'framer-motion'

const Three = () => {
    
  return (
    <div className='bg-black'>
        <div className='relative bg-[url("/assets/page3.jpeg")] mobile:w-full mobile:h-screen laptop:bg-cover bg-center mobile:-mt-24 laptop:mt-48 flex items-end justify-start laptop:px-48 mobile:bg-[length:125%] mobile:bg-no-repeat mobile:px-6 '>
            <div className='absolute bg-transparent text-white flex flex-col gap-4 mobile:mb-24'>
            <motion.h1 initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8}}  className='mobile:text-[1.2rem] laptop:text-[1.5rem]  font-medium tracking-tighter'>Designed for Performance and Aero Efficiency</motion.h1>
            <motion.p initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay: 0.5}}   className='mobile:text-xs laptop:text-sm font-medium mobile:pr-5'>As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.</motion.p>
            </div>
        </div>
        <div className='w-full h-full flex items-center justify-center laptop:mt-20 mobile:mt-0 mobile:px-5'>
            <img className='laptop:w-[75%] rounded-md' src="/assets/Interior.jpg" alt="" />   
        </div>
        <div className='laptop:absolute mobile:relative mobile:w-full mobile:px-5  bg-black text-white flex flex-col gap-4 laptop:px-48 w-full pt-10'>
            <motion.h1 initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8}} className='text-[1.3rem] font-medium tracking-tighter'>Interior</motion.h1>
            <motion.p initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay: 0.5}} className='text-sm font-medium'>The first supercar to set every performance record and still fit seating for four.</motion.p>
        </div>
        <div className='bg-[url("/assets/roadster-glass-desktop.jpg")] mobile:w-full mobile:h-screen laptop:bg-cover bg-center mobile:-mt-60 laptop:mt-48 flex items-end justify-start laptop:px-48 mobile:bg-[length:125%] mobile:bg-no-repeat mobile:px-6 '>
            <div className='bg-black  absolute bg-transparent text-white flex flex-col gap-4 mobile:mb-44 mobile:-pt-48'>
            <motion.h1 initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8}} className='text-[1.4rem] font-medium tracking-tighter mobile:whitespace-nowrap'>Glass Roof</motion.h1>
            <motion.p initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay: 0.5}} className='text-sm font-medium'>A lightweight, removable Glass Roof stores in the trunk <br /> for an open-air, convertible driving experience.</motion.p>
            </div>
        </div>
        
    </div>
  )
}

export default Three