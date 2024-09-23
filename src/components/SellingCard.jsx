import { useAnimate, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import graphic from "../assets/graphic2.png";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SellingCard = () => {
  const integrations = [
    "Shopify",
    "Etsy",
    " eBay",
    "Amazon",
    "TikTok Shop",
    "PrestaShop",
    "BigCommerce",
    "Wix",
    "WooCommerce",
    "Squarespace",
  ];
  const discover = [
    "Blog",
    "Guides",
    "Products",
    "Etsy print-on-demand",
    "Shopify print-on-demand",
    "Woocommerce print-on-demand",
    "Wix print-on-demand",
    "Squarespace print-on-demand",
    "Make Your Own Shirt",
    "Brands",
  ];
  const startSelling = [
    "Custom T-shirts",
    "Custom Hoodies",
    "Custom Mugs",
    "Custom Socks",
    "Custom Backpacks",
    "Custom Branding",
    "Sell on Etsy",
    "Sell on Social Media",
    "Free T-shirt Designs",
    "Custom Products",
  ];
  const printify = [
    "Print on Demand",
    "Print Providers",
    "Experts Program",
    "Printify Express Delivery",
    "Become a Partner",
    "About",
    "Printify Quality Promise",
    "Jobs",
    "Webinars",
    "Printing Profits Podcast",
  ];
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("card");
      const scrollPosition = window.scrollY + window.innerHeight;

      if (section && scrollPosition > section.offsetTop + 200) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div>
      <div id="card" className="px-20 lg:px-40 py-8 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="lg:w-[65%] bg-[#203741] p-8 rounded-lg flex flex-col gap-4"
        >
          <div className="text-white font-bold text-3xl">
            Make Money, Risk-Free
          </div>
          <div className="text-white text-lg">
            You pay for fulfillment only when you make a sale
          </div>
          <div className="bg-[#17262b] rounded-lg p-6 flex flex-col gap-5 mt-6">
            <div className="flex justify-between items-center">
              <div className="text-white text-lg">You sell a t-shirt</div>
              <div className="text-white text-lg">$ 30</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-white text-lg">
                You pay for its production
              </div>
              <div className="text-white text-lg">$ 12</div>
            </div>
            <div className="bg-gray-300 pt-[0.08px] w-full"></div>
            <div className="flex justify-between items-center pt-2 ">
              <div className="text-2xl font-bold text-[#3cb45c]">
                Your profit
              </div>
              <div className="text-2xl font-bold text-[#3cb45c]">$ 12</div>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <button className="rounded-md bg-[#3cb45c] text-white font-bold p-3 px-4">
              Start selling
            </button>
          </div>
          <div className="text-[#F5F5F5] m-2">
            100% Free to use · 900+ Products · Largest print network
          </div>
        </motion.div>
        <div className="absolute lg:top-[7%] xl:top-0 right-[5%] xl:right-[10%] w-[400px] xl:w-[450px] hidden lg:flex ">
          <img src={graphic} className="rounded-xl" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-16 px-14 lg:px-20 xl:px-24">
        <div className="flex items-center m-0">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <div className="font-logo font-bold text-3xl text-[#3cb45c] hidden sm:flex">
            Printify
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <FaFacebook className="text-[#3cb45c]" size={24} />
          <FaSquareInstagram className="text-[#3cb45c]" size={24} />
          <FaSquareXTwitter className="text-[#3cb45c]" size={24} />
          <AiFillTikTok className="text-[#3cb45c]" size={24} />
          <FaLinkedin className="text-[#3cb45c]" size={24} />
          <FaYoutube className="text-[#3cb45c]" size={24} />
        </div>
      </div>
      <div className="mt-10 px-10 md:px-16 lg:px-28 xl:px-44 lg:flex  lg:justify-between">
        <div className="flex items-center justify-between gap-4 pb-3 lg:gap-8" >
            <div className="flex flex-col px-4">
                <p className="text-xl py-1 pb-2 font-semibold">Integrations</p>
                {integrations.map((ele,i)=>{
                    return (
                        <p className="text-gray-500 hover:text-[#3cb45c] cursor-pointer py-1">{ele}</p>
                    )
                })}
            </div>
            <div className="flex flex-col px-6">
                <p className="text-xl py-1 pb-2 font-semibold">Discover</p>
                {discover.map((ele,i)=>{
                    return (
                        <p className="text-gray-500 hover:text-[#3cb45c] cursor-pointer py-1">{ele}</p>
                    )
                })}
            </div>
        </div>
        <div className="flex items-center justify-between gap-4 pt-10 lg:gap-8 lg:pt-0">
            <div className="flex flex-col px-4 ">
                <p className="text-xl py-1 pb-2 font-semibold">Start selling</p>
                {startSelling.map((ele,i)=>{
                    return (
                        <p className="text-gray-500 hover:text-[#3cb45c] cursor-pointer py-1">{ele}</p>
                    )
                })}
            </div>
            <div className="flex flex-col px-6 sm:px-20">
                <p className="text-xl py-1 pb-2 font-semibold">Printify</p>
                {printify.map((ele,i)=>{
                    return (
                        <p className="text-gray-500 hover:text-[#3cb45c] cursor-pointer py-1">{ele}</p>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SellingCard;
