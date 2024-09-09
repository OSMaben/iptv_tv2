import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/upload",
      title: "Upload",
    },
    {
      path: "/check-mac",
      title: "Check Mac",
    },
    {
      path: "/Download",
      title: "Download",
    },
    {
      path: "/payment",
      title: "Payment",
    },
    {
      path: "/tutorial",
      title: "Tutorial",
    },
    {
      path: "/faq",
      title: "Faq's",
    },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "50%" },
  };

  return (
    <div className="text-white w-full  overflow-hidden  absolute z-[1000] flex flex-row justify-center items-center">
      <div className="w-full max-w-7xl px-5 lg:px-0 py-6 flex flex-row justify-between items-center">
        {/* <img
          width="1139"
          height="286"
          src="https://tv-flex.com/wp-content/themes/iptvfiesta/logo.webp"
          alt="Iptv Flex"
          className="w-32 lg:w-40"
        /> */}
        <h1 className="text-xl">LOGO</h1>
        <div className=" flex flex-row justify-center items-center  lg:gap-20">
          <div className="lg:flex hidden flex-row font-semibold text-lg justify-center items-center gap-10">
            {navigation.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className="cursor-pointer text-white transition-all hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link to={'/contactUs'} className="hidden lg:block uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full">
            Contact Us
          </Link>
        </div>
        <div className=" flex flex-row lg:hidden justify-center gap-4 items-center">
          <button className=" lg:hidden uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full">
            ORDER NOW
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-lg lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        className={`lg:hidden flex flex-row-reverse z-[1000]  top-0 left-0 fixed w-full h-full  text-white`}
        initial={false}
        animate={{
          x: isSidebarOpen ? "0" : "100%",
        }}
        transition={{
          damping: 1,
        }}
      >
        <div className=" bg-gray-900 shadow shadow-[rgba(0,0,0,0.5)] flex flex-col sm:w-[40%] w-[60%]  p-3 pr-5 pt-5">
          <button className=" self-end" onClick={() => setIsSidebarOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            width="1139"
            height="286"
            src="https://tv-flex.com/wp-content/themes/iptvfiesta/logo.webp"
            className=" w-32 lg:w-40 mt-8 mb-3"
          />
          <div className=" ">
            {navigation.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className="block p-4 cursor-pointer hover:bg-gray-800"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          className="lg:hidden flex-1 top-0 left-0 h-full w-full"
          onClick={() => setIsSidebarOpen(false)}
        />
      </motion.div>
    </div>
  );
}

export default Header;
