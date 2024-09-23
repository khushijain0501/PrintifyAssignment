import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cap from "../assets/cap.png"
import mug from '../assets/coffee-shop.png'
import tshirt from '../assets/t-shirt.png'
import phoneCase from '../assets/phone-case.png'
import hoodie from '../assets/hoodie (1).png'
import bag from '../assets/shopping-bag.png'
import { FaArrowRightLong } from "react-icons/fa6";



const ProductsRange = () => {
    const images=[{img:cap,name:"Cap"},{img:mug,name:"Mug"},{img:tshirt,name:"T-shirt"},{img:phoneCase,name:"Phone Case"},{img:hoodie,name:"Hoodie"},{img:bag,name:"Bag"}]
    
  return (
    <div className='bg-gray-100 p-6 mt-8'>
    <div className='bg-white py-8 rounded-xl mx-10 md:mx-20 flex flex-col justify-center items-center'>
        <div className='bg-[#3cb45c] rounded-xl sm:w-[80%] md:w-[77%] lg:w-[70%] xl:w-[45%]'>
            <div className='grid min-h-[140px] w-full place-items-center rounded-lg p-6 '>
            <div className='grid grid-cols-3 gap-3'>
                {images.map((image,i)=>{
                    return (
                        <div className='bg-white relative rounded-md shadow-inner shadow-gray-400/70 border-[2.5px] border-[#3cb45c] w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 xl:gap-4 hover:bg-gray-200 cursor-pointer group'>
                            <div className='absolute top-[30%] left-[30%] group-hover:opacity-0'>
                            <img src={image.img} className='w-10 md:w-12 lg:w-14 xl:w-16'/>
                            </div>
                            <div className='opacity-0 bg-gray-200 w-full h-full flex justify-center items-center  font-semibold text-lg group-hover:opacity-100'>{image.name}</div>
                        </div>
                    )
                })}

            </div>
            </div>
        </div>
        <div className='flex flex-col p-5 gap-7 sm:w-[80%] md:w-[77%] lg:w-[70%] xl:w-[45%]'>
            <div className='text-3xl font-bold leading-10'>
            Easily add your design to a wide range of products
            </div>
            <div className='text-[#696969]' >
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
            </div>
            <div className='flex items-center gap-2 text-[#3cb45c] cursor-pointer'> 
                <span >All Products</span>
                <FaArrowRightLong className='text-center'/>

            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductsRange
