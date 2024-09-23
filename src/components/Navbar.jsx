import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showDropdown,setShowDropDown]=useState("");
  const [showSideBar,setShowSideBar]=useState(false)
  return (
    <div className="fixed z-10 bg-white w-full py-3 px-4  xl:pt-2 flex justify-between items-center border-[1px] border-gray-200 md:px-10 lg:px-14 center md:gap-7">
      <div className='flex items-center justify-center '>
      <GiHamburgerMenu className='text-[#3cb45c] cursor-pointer lg:hidden' size={30} onClick={()=>setShowSideBar(true)}/>
      <img src={logo} alt="logo" className='w-12 h-12'/>
      <div className='font-logo font-bold text-3xl text-[#3cb45c] hidden sm:flex'>Printify</div>
      </div>
      <div className='lg:flex items-center gap-4 text-md hidden'>
        <p className=' cursor-pointer hover:text-[#3cb45c]'>Catalog</p>
        <div className='flex items-center relative cursor-pointer' onMouseEnter={()=>setShowDropDown("howWorks")} onMouseLeave={()=>setShowDropDown("")}>
        <p className='hover:text-[#3cb45c]'>How it works</p>
        <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]'/>
        {showDropdown==="howWorks"&& 
        <div className='w-full w-[150px] absolute top-[90%] p-2 bg-white'>
          <ul className=''>
            <li className='py-1 hover:text-[#3cb45c]'>How Printify Works</li>
            <li className='py-1 hover:text-[#3cb45c]'>Print On Demand</li>
            <li className='py-1 hover:text-[#3cb45c]'>Printify Quality Promise</li>
            <li className='py-1 hover:text-[#3cb45c]'>What to Sell?</li>
          </ul>
          </div>}
        </div>
        <p className=' cursor-pointer hover:text-[#3cb45c]'>Pricing</p>
        <p className=' cursor-pointer hover:text-[#3cb45c]'>Blog</p>
        <div className='flex items-center relative cursor-pointer' onMouseEnter={()=>setShowDropDown("services")} onMouseLeave={()=>setShowDropDown("")}>
        <p className='hover:text-[#3cb45c]'>Services</p>
        <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]'/>
        {showDropdown==="services"&& 
        <div className='w-full w-[150px] absolute top-[90%] p-2 bg-white'>
          <ul className=''>
            <li className='py-1 hover:text-[#3cb45c]'>Printify Studio</li>
            <li className='py-1 hover:text-[#3cb45c]'>Printify Express Delivery</li>
            <li className='py-1 hover:text-[#3cb45c]'>Transfer Products</li>
            <li className='py-1 hover:text-[#3cb45c]'>Order In Bulk</li>
          </ul>
          </div>}
        </div>
        <div className='flex items-center relative cursor-pointer' onMouseEnter={()=>setShowDropDown("useCase")} onMouseLeave={()=>setShowDropDown("")}>
        <p className='hover:text-[#3cb45c]'>Usecases</p>
        <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]'/>
        {showDropdown==="useCase"&& 
        <div className='w-full w-[150px] absolute top-[90%] p-2 bg-white'>
          <ul className=''>
            <li className='py-1 hover:text-[#3cb45c]'>Merch for Fans</li>
            <li className='py-1 hover:text-[#3cb45c]'>Merch for eCommerce</li>
            <li className='py-1 hover:text-[#3cb45c]'>Merch for Enterprises</li>
            <li className='py-1 hover:text-[#3cb45c]'>Grow Your Store</li>
          </ul>
          </div>}
        </div>
        <div className='flex items-center relative cursor-pointer' onMouseEnter={()=>setShowDropDown("needHelp")} onMouseLeave={()=>setShowDropDown("")}>
        <p className='hover:text-[#3cb45c]'>Need Help?</p>
        <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]'/>
        {showDropdown==="needHelp"&& 
        <div className='w-full w-[150px] absolute top-[90%] p-2 bg-white'>
          <ul className=''>
            <li className='py-1 hover:text-[#3cb45c]'>Help Center</li>
            <li className='py-1 hover:text-[#3cb45c]'>Contacts</li>
            <li className='py-1 hover:text-[#3cb45c]'>My Requests</li>
          </ul>
          </div>}
        </div>
      </div>
      <div className='flex gap-2'>
        <button className='border-[1px] border-gray-400 p-2 px-4 rounded-sm font-semibold hover:text-[#3cb45c]'>Log in</button>
        <button className='bg-[#3cb45c] p-2 px-4 rounded-sm text-white font-semibold hover:bg-[#35a152]'>Sign up</button>
      </div>
      {showSideBar && <Sidebar setShowSideBar={setShowSideBar}/>}
    </div>
  )
}

export default Navbar
