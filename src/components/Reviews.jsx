import React, { useEffect } from 'react';
import Slider1 from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const controls = useAnimation();

  // Scroll event to trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('reviews-section');
      const scrollPosition = window.scrollY + window.innerHeight;

      if (section && scrollPosition > section.offsetTop + 200) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const reviews = [
    {
      img: user1,
      name: 'Robert A. Voltaire',
      src: 'Store link',
      review:
        'Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
    },
    {
      img: user2,
      name: 'Quintin Barney',
      src: 'Etsy merchant',
      review:
        "We chose Printify because of their offerings as well incredibly low prices. After several years, we've com find that their customer service is also top notch, ar platform just keeps getting better and better.",
    },
    {
      img: user3,
      name: 'Nikki',
      src: 'Store link',
      review:
        "We chose Printify because of their offerings as well incredibly low prices. After several years, we've com find that their customer service is also top notch, ar platform just keeps getting better and better.",
    },
    {
      img: user4,
      name: 'April Showers',
      src: 'Store link',
      review:
        "We chose Printify because of their offerings as well incredibly low prices. After several years, we've com find that their customer service is also top notch, ar platform just keeps getting better and better.",
    },
  ];

  const settings = {
    dots: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinte: true,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: (
      <div className="z-50">
        <div className="next-slick-arrow z-50 w-10">
          <MdArrowRight className="w-10 text-black" />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow">
          <MdArrowLeft />
        </div>
      </div>
    ),
   
  };

  // Framer motion variants for text animation
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div id="reviews-section" className="flex flex-col p-10 bg-gray-100">
      <motion.div
        className="text-center xl:flex xl:text-left xl:px-60"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div className="text-4xl font-bold">
          Trusted by over 8M sellers around the world
        </div>
        <div className="text-lg text-[#696969] mt-6">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </div>
      </motion.div>

      <motion.div
        className="xl:mx-44"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <Slider1
          {...settings}
          className=" bg-[#F5F5F5] xl:ml-20 pb-4 mx-8 md:mx-16 lg:mx-32 m-auto items-center"
        >
          {reviews.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-6 justify-center m-auto items-center my-6 ounded-lg bg-white "
              >
                <div className="flex p-6">
                  <div>
                    <img src={ele.img} className="w-20 rounded-[50%]" />
                  </div>
                  <div className="flex flex-col px-4">
                    <div className="pb-1 font-semibold">{ele.name}</div>
                    <div className="text-[#3cb45c] pb-1">{ele.src}</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => {
                        return <FaStar key={star} className="text-[#FFE247]" />;
                      })}
                    </div>
                  </div>
                </div>
                <div className="px-4">{ele.review}</div>
              </div>
            );
          })}
        </Slider1>
      </motion.div>
    </div>
  );
};

export default Reviews;
