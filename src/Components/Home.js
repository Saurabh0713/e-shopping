import React from 'react'
import tv from '../img/tv.png'
import sony from '../img/sony.png'

export default function Home() {
  return (
    <div className=' pt-14 w-full h-max bg-zinc-700'>
     <div className=' w-full h-full flex items-center justify-around bg-gradient-to-r from-amber-500 to-blue-500'>
     <div className='w-2/5 h-max p-4 sm:pl-10 bg-zinc-300/50 cursor-pointer'>
       <img className='w-16 my-1 mb-2 pl-1 text-white' src={sony}></img>
        <h3 className='sm:my-1 md:text-xl'>BRAVIA XL90</h3>
        <p className='sm:my-1 md:text-3xl'>Vibrant Contrast</p>
        <p className='sm:my-1 md:text-2xl'>Vivid Colors</p>
        <button  className='text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-800 md:my-2 my-1 sm:px-3 px-2 sm:text-base text-sm py-1 rounded'>Explore...</button>
      </div>
      <div className=' h-full w-full flex items-center justify-center'>
        <img className='sm:w-3/5' src={tv}></img>
      </div>
     </div>
     <div className='sm:h-28 h-max flex justify-between items-center bg-zinc-400'>
     <h2 className='sm:my-6 my-3 md:ml-16 sm:px-4 pl-4 sm:text-3xl text-xl  inline-block'>Trending Products...</h2>
     <button  className='text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-800 px-3 py-2 m-6 md:mr-28 sm:text-base text-sm rounded'>Find out now</button>
     </div>
    
    </div>
  )
}
