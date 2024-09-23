import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Sidebar = ({ setShowSideBar }) => {
  const [showDropdown, setShowDropDown] = useState("");

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 top-0 right-0 bottom-0 left-0 flex justify-center items-center p-6 py-4 z-50 h-full'>
      <motion.div
        className='bg-white h-screen flex flex-col absolute left-0 top-0 p-8'
        initial={{ x: '-100%' }} 
        animate={{ x: '0%' }} 
        exit={{ x: '-100%' }} 
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className='flex justify-between items-center gap-3'>
          <p className='font-semibold text-xl'>Menu</p>
          <RxCross2 className='cursor-pointer' onClick={() => setShowSideBar(false)} />
        </div>

        <div className='flex flex-col justify-center p-3 mt-16 text-lg gap-5 text-sm '>
          <p className='cursor-pointer hover:text-[#3cb45c]'>Catalog</p>
          <div className='flex flex-col cursor-pointer' onMouseEnter={() => setShowDropDown("howWorks")} onMouseLeave={() => setShowDropDown("")}>
            <div className='flex items-center'>
              <p className='hover:text-[#3cb45c]'>How it works</p>
              <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]' />
            </div>
            {showDropdown === "howWorks" && 
              <div>
                <ul>
                  <li className='py-1 hover:text-[#3cb45c]'>How Printify Works</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Print On Demand</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Printify Quality Promise</li>
                  <li className='py-1 hover:text-[#3cb45c]'>What to Sell?</li>
                </ul>
              </div>}
          </div>
          <p className='cursor-pointer hover:text-[#3cb45c]'>Pricing</p>
          <p className='cursor-pointer hover:text-[#3cb45c]'>Blog</p>
          <div className='flex flex-col cursor-pointer' onMouseEnter={() => setShowDropDown("services")} onMouseLeave={() => setShowDropDown("")}>
            <div className='flex items-center'>
              <p className='hover:text-[#3cb45c]'>Services</p>
              <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]' />
            </div>
            {showDropdown === "services" && 
              <div className=''>
                <ul>
                  <li className='py-1 hover:text-[#3cb45c]'>Printify Studio</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Printify Express Delivery</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Transfer Products</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Order In Bulk</li>
                </ul>
              </div>}
          </div>
          <div className='flex flex-col cursor-pointer' onMouseEnter={() => setShowDropDown("useCase")} onMouseLeave={() => setShowDropDown("")}>
            <div className='flex items-center'>
              <p className='hover:text-[#3cb45c]'>Usecases</p>
              <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]' />
            </div>
            {showDropdown === "useCase" && 
              <div className='w-full p-2 bg-white'>
                <ul>
                  <li className='py-1 hover:text-[#3cb45c]'>Merch for Fans</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Merch for eCommerce</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Merch for Enterprises</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Grow Your Store</li>
                </ul>
              </div>}
          </div>
          <div className='flex items-center relative cursor-pointer' onMouseEnter={() => setShowDropDown("needHelp")} onMouseLeave={() => setShowDropDown("")}>
            <p className='hover:text-[#3cb45c]'>Need Help?</p>
            <IoIosArrowDown className='hover:rotate-[180deg] hover:text-[#3cb45c]' />
            {showDropdown === "needHelp" && 
              <div className='w-full w-[150px] absolute top-[90%] p-2 bg-white'>
                <ul>
                  <li className='py-1 hover:text-[#3cb45c]'>Help Center</li>
                  <li className='py-1 hover:text-[#3cb45c]'>Contacts</li>
                  <li className='py-1 hover:text-[#3cb45c]'>My Requests</li>
                </ul>
              </div>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar;
