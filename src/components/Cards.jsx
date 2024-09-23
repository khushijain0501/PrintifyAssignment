import React, { useState } from 'react'

const Cards = () => {
    const [showDetails,setShowDetails]=useState(false)
  return (
    <div className='flex px-14 md:px-20 gap-6 py-8 lg:gap-2 items-center w-full justify-center xl:ml-32'>
      <div className='flex flex-col gap-3 cursor-pointer group w-full'>
        <img src='https://printify.com/pfh/assets/legacy/higher-profits.svg' className='w-full md:w-[60%] lg:w-[50%] xl:w-[40%]'/>
        <div className='text-xl font-bold lg:text-2xl'>Higher Profits </div>
        <div className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</div>
      </div>
      <div className='flex flex-col gap-3 cursor-pointer group w-full '>
        <img src='https://printify.com/pfh/assets/legacy/robust-scaling.svg' className='w-full md:w-[60%] lg:w-[50%] xl:w-[40%]'/>
        <div className='text-xl font-bold lg:text-2xl'>Robust Scaling </div>
        <div className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</div>
      </div>
      <div className='flex flex-col gap-3 cursor-pointer group w-full'>
        <img src='https://printify.com/pfh/assets/legacy/best-selection.svg' className='w-full md:w-[60%] lg:w-[50%] xl:w-[40%]'/>
        <div className='text-xl font-bold lg:text-2xl'>Best Selection </div>
        <div className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">With 900+ products and top quality brands, you can choose the best products for your business.</div>
      </div>
    </div>
  )
}

export default Cards
