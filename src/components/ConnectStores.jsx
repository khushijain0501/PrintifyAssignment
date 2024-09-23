import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from '../assets/logo.png'
import shopify from '../assets/shopify.png'
import woo from '../assets/woo.jpeg'
import bigC from '../assets/bigcommerce.jpeg'
import etsy from '../assets/etsy.png'
import presta from '../assets/presta.png'
import wix from '../assets/wix.png'
import squarespace from '../assets/squarespace.png'

const ConnectStores = () => {
    const controls = useAnimation();

  // Trigger animation based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Box variants for motion (starting from center and moving outwards)
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0, // Start from center (same position as the green box)
      y: 0,
    },
    visible: (direction) => ({
      opacity: 1,
      scale: 1,
      x: direction.x, // Move outward to respective positions
      y: direction.y,
      transition: { duration: 0.6, delay: direction.delay },
    }),
  };

  const getPosition = () => {
    const width = window.innerWidth;

    if (width < 640) { // Small screens
      return {
        shopify: { x: -170, y: -170, delay: 0.2 },
        woo: { x: 140, y: -160, delay: 0.4 },
        bigC: { x: -150, y: 170, delay: 0.6 },
        etsy: { x: 80, y: 190, delay: 0.8 },
        squarespace: { x: -180, y: 20, delay: 0.5 },
        wix: { x: 30, y: -120, delay: 0.3 },
        presta: { x: 160, y: 70, delay: 0.7 }
      };
    } else if (width < 1024) { // Medium screens
      return {
        shopify: { x: -200, y: -180, delay: 0.2 },
        woo: { x: 250, y: -180, delay: 0.4 },
        bigC: { x: -190, y: 240, delay: 0.6 },
        etsy: { x: 130, y: 240, delay: 0.8 },
        squarespace: { x: -280, y: 80, delay: 0.5 },
        wix: { x: 70, y: -130, delay: 0.3 },
        presta: { x: 210, y: 70, delay: 0.7 }
      };
    } else { // Large screens
      return {
        shopify: { x: -210, y: -230, delay: 0.2 },
        woo: { x: 250, y: -270, delay: 0.4 },
        bigC: { x: -190, y: 230, delay: 0.6 },
        etsy: { x: 200, y: 270, delay: 0.8 },
        squarespace: { x: -300, y: 100, delay: 0.5 },
        wix: { x: 80, y: -210, delay: 0.3 },
        presta: { x: 270, y: 60, delay: 0.7 }
      };
    }
  };

  const positions = getPosition();

  return (
    <div className="flex flex-col items-center my-16">
        <div className="text-center">
            <div className="text-4xl font-bold m-2">Connect your store</div>
            <div className="text-lg text-[#696969] mt-6">Printify easily integrates wiht major e-commerce platforms and marketplaces</div>
        </div>
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Central Green Box */}
      <motion.div
        className="z-10 w-36 h-36 xl:w-44 xl:h-44 flex items-center justify-center rounded-lg"
        initial={{ scale: 1 }}
      >
        {/* Main logo or content */}
        <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none ">
        <img src={logo} alt="Main" />
        </div>
      </motion.div>

      {/* Outer Boxes that emerge outward from the center */}
      <motion.div
        className="absolute w-24 h-24  md:w-28 md:h-28 xl:w-32 xl:h-32  rounded-lg"
        custom={positions.shopify} // Top-left box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
       <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={shopify}  className="w-full h-full "/>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20  xl:w-24 xl:h-24  rounded-lg"
        custom={positions.woo} // Top-right box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
        <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={woo}  className="w-full h-full "/>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-lg"
        custom={positions.bigC} // Bottom-left box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
         <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={bigC}  className="w-full h-full "/>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20  xl:w-24 xl:h-24 rounded-lg"
        custom={positions.etsy} // Bottom-right box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
         <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={etsy}  className="w-full h-full "/>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20  xl:w-24 xl:h-24 rounded-lg"
        custom={positions.squarespace} // Bottom-right box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
         <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={squarespace}  className="w-full h-full "/>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-20 h-20 md:w-24 md:h-24  xl:w-32 xl:h-32 rounded-lg"
        custom={positions.wix} // Bottom-right box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
         <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={wix}  className="w-full h-full "/>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-20 h-20 xl:w-36 xl:h-36 rounded-lg"
        custom={positions.presta} // Bottom-right box
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
         <div className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none p-2 hover:scale-125 cursor-pointer">
        <img src={presta}  className="w-full h-full "/>
        </div>
      </motion.div>
    </div>
    <div className="flex justify-center mx-4 items-center">
    <div className="bg-gradient-to-l from-green-500 to-green-300 rounded-lg mx-8 flex items-center p-8">
        <div className="px-2 max-w-[60%] text-lg font-semibold">
        Are you a large business looking for custom solutions?
        </div>
    
        <button className="rounded-md bg-white px-6 font-semibold py-1">
            Talk to sales
        </button>
        </div>
    </div>
    </div>
  )
}

export default ConnectStores
