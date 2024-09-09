import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full  border-t-[1px] border-gray-800 font-semibold justify-center items-center flex flex-col">
      <div class=" flex py-8 px-5 lg:px-0  flex-row w-full max-w-7xl justify-between">
        <div id="logo">
          
          <h1  className="text-white  text-xl">Logo</h1>
        </div>
        <div>
          <img
            width="288"
            height="27"
            className="lg:w-full w-44"
            src="https://tv-flex.com/wp-content/themes/iptvfiesta/assets/payment-icons.svg"
          />
        </div>
      </div>
      <div className=" gradient_bg py-5 w-full flex flex-col justify-center items-center">
        <div class=" text-white  w-full max-w-7xl  ">
          <div class=" flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-10">
            <div class=" flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-10">
              <Link to={"/terms-of-service"}>Terms of service</Link>

              <Link to={"/privacy-policy"} href="">
                Privacy Policy
              </Link>

              <Link to={"/refund-policy"}>Refunds and Returns policy</Link>
            </div>
            <div>
              <p className=" px-10 text-center lg:px-0 lg:text-start">
                Copyright © 2016-2023 <b>logo</b> - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
