import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdOutlineVideocam } from "react-icons/md";
import graphic1 from "../assets/graphic1.png"

const CreateSellComp = () => {
  return (
    <div className='pt-24 flex w-full'>
       <div className='w-full pb-14 flex flex-col sm:flex-row '  style={{
        backgroundImage: 'linear-gradient(320deg, transparent 40%, #F5F5F5 40%, #F5F5F5 60%, transparent 60%)',
        backgroundSize: '100% 100%',}}>
            <div className='px-10 pt-10 w-full py-4 sm:flex sm:justify-center'>
      <div className='flex flex-col px-6 pl-8 gap-2'>
        <div className='text-4xl font-semibold xl:text-5xl xl:font-bold xl:pt-16'><span className=''>Create and sell</span><br/>
        custom products
        </div>
        <div className='pt-4 flex flex-col gap-2 xl:text-xl'>
            <div className='flex items-center gap-2'>
            <FaCheck className='text-[#3cb45c]'/>
            <div className='text-[#696969] text-lg font-semibold'>100% Free to use</div>
            </div>
            <div className='flex items-center gap-2'>
            <FaCheck className='text-[#3cb45c]'/>
            <div className='text-[#696969] text-lg font-semibold'>900+ High-Quality Products</div>
            </div>
            <div className='flex items-center gap-2'>
            <FaCheck className='text-[#3cb45c]'/>
            <div className='text-[#696969] text-lg font-semibold'>Largest global print network</div>
            </div>
        </div>
        <div className='flex gap-3 items-center pt-6'>
            <button className='bg-[#3cb45c] p-2 px-4 rounded-sm text-white font-semibold hover:bg-[#35a152]'>Start for free</button>
            <button className=' flex gap-2 items-center border-[1px] border-gray-400 p-2 px-4 rounded-sm font-semibold'>
            <MdOutlineVideocam size={20} className='text-[#696969]'/>
            <div className='text-[#696969] text-md font-semibold hover:text-[#3cb45c]'>How it works?</div>
            </button>
        </div>
        <div className='text-[#3cb45c] font-semibold'>
      Trusted by over 8M sellers around the world
      </div>
      </div>
      </div>
      
      <img src={graphic1} className='w-[70%] sm:w-[40%] sm:pr-6 sm:mr-10 md:w-[45%] lg:w-[40%] xl:w-[35%] lg:mr-14 xl:mr-16 self-center'/>
      
      </div>
    </div>
  )
}

export default CreateSellComp
