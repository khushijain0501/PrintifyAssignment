import React from 'react'
import Slider1 from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/slider1.png'
import img2 from '../assets/slider2.png'
import img3 from '../assets/slider3.png'
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

const Slider = () => {
    const content=[{
        img:img1,
        heading1:"CREATE",
        heading2:"custom products",
        para:"Easily add your designs to a wide range of products using our free tools"
    },
    {
        img:img2,
        heading1:"SELL",
        heading2:"on your terms",
        para:"You choose the products, sale price, and where to sell"
    },
    {
        img:img3,
        heading1:"WE HANDLE",
        heading2:"fulfilment",
        para:"Once an order is placed, we automatically handle all the printing and delivery logistics"
    },
]
    const settings={
        dots:true,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        infinte:true,
        autoplay:false,
        autoplaySpeed:3000,
        nextArrow:(
            <div className='z-50'> 
                <div className='next-slick-arrow z-50 w-10'>
                    <MdArrowRight className='w-10 text-black'/>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className='next-slick-arrow'>
                    <MdArrowLeft/>
                </div>
            </div>
        ),
}
  return (
    
    <div className='bg-gray-100'>
      <Slider1 {...settings} className=' bg-[#F5F5F5] xl:ml-20 pb-4 '>
        {content.map((ele,index)=>{
            return (
                <div className='flex flex-col justify-center items-center my-6 px-8'>
                    <img src={ele.img} alt="img" className='w-56 h-56 m-auto '/>
                    <div className='font-bold text-xl text-[#3cb45c] text-center'>{ele.heading1}</div>
                    <div className='font-bold text-lg text-center'>{ele.heading2}</div>
                    <div className='text-center '>{ele.para}</div>
                </div>
            )
        })}
      </Slider1>
    </div>
    
  )
}

export default Slider
