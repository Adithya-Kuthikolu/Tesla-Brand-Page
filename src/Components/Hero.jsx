import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center mt-20 items-center'>
        <motion.h1 initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8}}
        viewport={{once:true}} className='mobile:text-[1.7rem] text-center text-4xl font-medium tracking-tighter'>Roadster</motion.h1>
        <div className='w-[50%] h-24 flex laptop:mt-[30rem] mobile:mt-[37rem] mobile:flex mobile:flex-col laptop:flex '>
            <div className='mobile:flex mobile:items-center mobile:justify-center mobile:gap-20'>
                <motion.div initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className='w-[25%] h-full flex flex-col items-center justify-center gap-1 text-white'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl font-semibold mobile:text-lg'>1.9</h1>
                    <h1 className='text-sm font-semibold mobile:text-xs'>s</h1>
                </div>
                <p className='text-sm mobile:text-sm mobile:whitespace-nowrap'>0-60 mph</p>
            </motion.div>            
            <motion.div initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay:0.5}} viewport={{once:true}} className='w-[25%] h-full flex flex-col items-center justify-center gap-1 text-white'>
                <div className='flex justify-center text-center items-center'>
                    <h1 className='text-2xl font-semibold mobile:text-lg '>+250</h1>
                    <h1 className='text-sm font-semibold mobile:text-xs'>mph</h1>
                </div>
                <p className='text-sm mobile:text-sm mobile:whitespace-nowrap'>Top Speed</p>
            </motion.div>            
            <motion.div initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay:1}} viewport={{once:true}} className='w-[25%] h-full flex flex-col items-center justify-center gap-1 text-white'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl font-semibold mobile:text-lg'>620</h1>
                    <h1 className='text-sm font-semibold mobile:text-xs'>mi</h1>
                </div>
                <p className='text-sm mobile:text-sm mobile:whitespace-nowrap'>Range</p>
            </motion.div>
            <motion.div initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay:1.5}} viewport={{once:true}} className='w-[25%] h-full flex flex-col items-center justify-center gap-1 text-white mobile:hidden laptop:flex laptop:whitespace-nowrap'>
                <button className='border-2 border-white px-10 py-2 rounded-sm hover:bg-white hover:text-black ease-in transition duration-200'>Reserve Now</button>
            </motion.div> 
            </div>
            <div className='laptop:hidden mobile:whitespace-nowrap mobile:flex items-center'>
            <motion.div initial = {{opacity: 0, y: 50}} whileInView ={{opacity:1, y:0}} transition={{duration:0.8, delay:1.5}} viewport={{once:true}} className='w-full h-full flex flex-col items-center justify-center gap-1 text-white mt-8'>
                <button className='border-2 border-white px-10 py-2 mobile:px-16 rounded-sm hover:bg-white hover:text-black ease-in transition duration-200'>Reserve Now</button>
            </motion.div>            
            </div>           
        </div>
    </div>
  )
}

export default Hero