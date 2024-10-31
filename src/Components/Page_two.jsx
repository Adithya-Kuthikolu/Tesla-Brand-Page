import React from 'react'
import Video from '../assets/Video.mp4'

const Page_two = () => {
  return (
    <div className='flex items-center justify-center pt-8 mobile:pb-0 laptop:pb-8 bg-black '>
      <video autoPlay controls loop muted className='mobile:w-full mobile:rounded-xl mobile:px-1 laptop:w-[75%] rounded-[12px]'>
        <source src={Video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Page_two