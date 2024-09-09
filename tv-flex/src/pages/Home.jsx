import React, { useState } from "react";
import AutoSwiper from "../components/AutoSwiper";
import Price_Card from "../components/Price_Card";
import Features_List from "../components/Features_List";
import Testimonials from "../components/Testimonials";
import { Disclosure } from "@headlessui/react";
// import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  const slides1 = [
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/ufc.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/espn.webp",
    },
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/afa.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/directv.webp",
    },
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/nfl.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/uefa.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/bein.webp",
    },
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/sky.webp",
    },
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/ufc.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/espn.webp",
    },
    {
      image: "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/afa.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/directv.webp",
    },
  ];

  const slides2 = [
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/apple-tv-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/disnep-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hbo-max-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hulu-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/netflix-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/prime-video-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/apple-tv-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/disnep-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hbo-max-top.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hulu-top.webp",
    },
  ];

  const price_tabs = ["1 Connection", "2 Connections", "3 Connections"];

  const base_plan = [59, 99, 129];
  const silver_plan = [19, 25, 91];
  const gold_plan = [29, 39, 59];
  const platinium_plan = [39, 59, 79];

  const plans = [
    {
      title: "Basic Plan",
      duration: "1 YEAR",
      prices: base_plan,
    },
    {
      duration: "1 MONTH",
      title: "Silver Plan",
      prices: silver_plan,
    },
    {
      duration: "3 MONTHS",
      title: "Gold Plan",
      prices: gold_plan,
    },
    {
      duration: "6 MONTHS",
      title: "Platinium Plan",
      prices: platinium_plan,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-full relative myBg h-auto mx-auto">
        <div className="h-full w-full    top-10 left-0">
          <div className="max-w-7xl py-10  grid grid-cols-1 lg:grid-cols-2  relative z-50 mx-auto ">
            <div className="">
              <p className="text-left lg:text-xl text-[#dadada]">
                The Most Reliable, No Buffering
              </p>
              <h1 className="lg:text-5xl text-3xl lg:px-0 px-10  leading-normal lg:leading-tight  tracking-wide font-black text-left text-white mt-4">
                Looking For{" "}
                <span className="gradient_text">
                  
                </span>{" "}
                <br />
                IPTV Service?
              </h1>
              <p className=" text-left text-base text-[#dadada] px-6 mt-4 lg:text-lg text">
                Experience the future of Stream with our high-quality IPTV
                Service, now with a money-back guarantee! Enjoy 30,000+
                channels, movies, and series in 4K, FHD, HD. Say goodbye to
                traditional TV today!
              </p>
              <div className="flex items-center  gap-4 mt-6   justify-start">
                <button className="px-6 py-3 gradient_bg rounded-full text-white font-semibold">
                  CHANNEL LIST
                </button>
                <button className="px-6 py-3 gradient_bg rounded-full text-white font-semibold">
                  SETUP GUIDE
                </button>
              </div>
            </div>
            <div>
              <img
                className="block m-auto mt-5 w-[300px] lg:w-[600px]"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/iptv-smarters.webp"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-4xl relative z-50 mx-auto">
            <div className="flex items-center gap-4 mt-6 flex-col  justify-center">
              <button className="px-8 py-4  gradient_bg rounded-full text-white font-bold">
                GET STARTED
              </button>
            </div>

            <div className="mt-20 grid px-5 lg:grid-cols-6 grid-cols-6 gap-2 lg:gap-12">
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/netflix.svg"
                alt=""
              />
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hbo.svg"
                alt=""
              />{" "}
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/amazon-prime.svg"
                alt=""
              />{" "}
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/Apple_TV_Plus.svg"
                alt=""
              />{" "}
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/disney-plus.svg"
                alt=""
              />{" "}
              <img
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/hulu.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl  mx-auto py-5 z-50 relative">
        <AutoSwiper
          slides={slides1}
          className={" h-[180px]  w-[30%] lg:h-[280px]  "}
        />
      </div>
      <div className=" w-full flex flex-col justify-center text-center items-center text-white py-5">
        <div className=" w-full max-w-7xl px-2">
          <span className="text-center lg:text-xl text-primary  ">
            +150,000 latest VOD titles available
          </span>
          <h2 className=" font-bold text-xl lg:text-3xl py-3">
            Access new releases from top platforms with one subscription
          </h2>
        </div>
      </div>

      <div className="max-w-7xl  mx-auto   z-50 relative">
        <AutoSwiper slides={slides2} className={"!w-[218.5px] !h-[330px]"} />
      </div>

      <div className=" w-full flex flex-col justify-center text-center items-center text-white  py-5">
        <div className=" flex flex-col justify-center items-center">
          <ul className=" py-10  w-full max-w-7xl   grid grid-cols-2  gap-10 lg:gap-24 lg:grid-cols-4 items-center">
            <li className=" flex flex-row justify-center items-center gap-3 py-2">
              <div className="text-center flex flex-col justify-center items-center">
                <p className="text-3xl lg:text-4xl font-extrabold">6 Years</p>
                <p className="text-md mt-2 text-[#7f8ea3] font-semibold ">
                  In Business
                </p>
              </div>
            </li>
            <li className=" flex flex-row justify-center items-center gap-3 py-2">
              <div className="text-center flex flex-col justify-center items-center">
                <p className="text-3xl lg:text-4xl font-extrabold">+8,120</p>
                <p className="text-md mt-2 text-[#7f8ea3] font-semibold ">
                  Satisfied customers
                </p>
              </div>
            </li>
            <li className=" flex flex-row justify-center items-center gap-3 py-2">
              <div className="text-center flex flex-col justify-center items-center">
                <p className="text-3xl lg:text-4xl font-extrabold">+150,000</p>
                <p className="text-md mt-2 text-[#7f8ea3] font-semibold ">
                  Films &amp; Series
                </p>
              </div>
            </li>
            <li className=" flex flex-row justify-center items-center gap-3 py-2">
              <div className="text-center flex flex-col justify-center items-center ">
                <p className="text-3xl lg:text-4xl font-extrabold">+22,000</p>
                <p className="text-md mt-2 text-[#7f8ea3] font-semibold ">
                  Channels
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center flex flex-col pt-5 text-white justify-center items-center">
        <p className=" text-2xl lg:text-4xl font-extrabold">
          Say Goodbye to Cable Costs
        </p>
        <p className="text-md mt-2 text-[#7f8ea3] font-semibold ">
          The only Tv subscription you need
        </p>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-5 lg:px-0 pb-20 pt-10 ">
        <div className="  w-full max-w-7xl text-center grid grid-cols-1 lg:grid-cols-3 gap-5 text-white items-center">
          <div class=" p-6 flex flex-col justify-center items-center gap-5 bg-gray-900 rounded-2xl border-[1px] border-gray-800">
            <div className=" w-full rounded-3xl overflow-hidden  ">
              <img
                width="1600"
                height="776"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/prepricing-1.webp"
                className=" w-full h-full"
              />
            </div>
            <h5 className=" text-2xl font-semibold">Thousands of Channels</h5>
            <p className=" text-[#7f8ea3] text-lg">
              We offer international IPTV channels from around the world,
              including all the major channels from Canada, United States,
              United Kingdom, and elsewhere.
            </p>
          </div>

          <div class=" p-6 flex flex-col justify-center items-center gap-5 bg-gray-900 rounded-2xl border-[1px] border-gray-800">
            <div className=" w-full rounded-3xl overflow-hidden  ">
              <img
                width="1271"
                height="698"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/prepricing-2.webp"
              />
            </div>
            <h5 className=" text-2xl font-semibold">All Devices</h5>
            <p className=" text-[#7f8ea3] text-lg">
              Our IPTV works on all devices such as Smart TVs, Android, Roku,
              Formuler, FireStick, MAG, iOS, and any other device that supports
              M3U or portals.
            </p>
          </div>

          <div class=" p-6 flex flex-col justify-center items-center gap-5 bg-gray-900 rounded-2xl border-[1px] border-gray-800">
            <div className=" w-full rounded-3xl overflow-hidden  ">
              <img
                width="1024"
                height="512"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/prepricing-3.webp"
              />
            </div>
            <h5 className=" text-2xl font-semibold">
              Sports | VOD &amp; Catchup
            </h5>
            <p className=" text-[#7f8ea3] text-lg">
              The best IPTV solution at the best price - watch your favorite
              movies and TV shows in 4K/Full HD. Tune in for the biggest matches
              and PPV events.
            </p>
          </div>
        </div>
      </div>

        

      {/* features */}
      <div className=" w-full flex flex-col text-white pb-24 justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center  max-w-7xl">
          <span className="text-center lg:text-xl text-primary  ">
            Our high quality iptv Service
          </span>
          <h2 className=" text-2xl lg:text-4xl font-bold pt-4">
            Why Subscribe To Our Service
          </h2>
          <div className=" lg:py-10 py-0 px-5">
            <Features_List />
          </div>
          <button className=" mt-8 lg:mt-0 text-white w-fit lg:block uppercase gradient_bg p-3 px-10 text-sm lg:text-lg font-semibold rounded-full">
            SAVE 50% OFF ONLY TODAY!
          </button>
        </div>
      </div>

      {/* cta */}
      <div className=" w-full flex flex-col text-white pb-24 justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center  max-w-7xl">
          <div className=" flex flex-col lg:flex-row-reverse justify-center gap-10 items-center">
            <div className=" px-5 lg:px-0 lg:w-[50%]">
              <img
                width="680"
                height="454"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/IPTV-Smarters-banner.webp"
              />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start px-5">
              <h2 className="lg:text-3xl text-2xl font-semibold pt-4">
                Experience Entertainment{" "}
                <b>
                  <span className="gradient_text">Reinvented</span>
                </b>
                : All Your Favorite Channels and Movies in a{" "}
                <b>
                  <span className="gradient_text">Single Destination</span>
                </b>
                !
              </h2>
              <p className=" text-[#7f8ea3] py-5 text-base lg:text-lg">
                Choose Our Leading IPTV Providers for Access to Your Beloved{" "}
                <b className=" text-white">Country Packs</b>. Dive into a
                Universe of Over <b className=" text-white">22,000 Channels</b>,{" "}
                <b className=" text-white">150,000+ VOD Titles</b>, and{" "}
                <b className=" text-white">+200 Adult Channels</b>. Leave Behind
                Frustrating Freezing and Buffering, Thanks to Our
                State-of-the-Art Solutions Delivering{" "}
                <b className=" text-white">Lag-Free Viewing. </b>Enjoy
                Unbeatable Pricing Plans Across All Your Devices!
              </p>
              <button className=" lg:self-start self-center mt-8 lg:mt-0 text-white  w-fit lg:block uppercase gradient_bg p-3 px-10 text-sm lg:text-lg font-semibold rounded-full">
                Today only 50% OFF
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className=" w-full flex flex-col text-white px-5 lg:px-0 pb-24 justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center  max-w-7xl">
          <span className="text-center text-xl text-primary  ">
            Customer's Reviews
          </span>
          <h2 className="lg:text-4xl text-2xl max-w-2xl text-center pb-10 font-bold pt-4">
            What Our Clients Say About our iptv service
          </h2>
        </div>
        <Testimonials />
      </div>

      {/* cta 2 */}
      <div className=" w-full flex flex-col text-white pb-24 justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center  max-w-7xl">
          <div className=" flex flex-col lg:px-0 px-5 lg:flex-row justify-center gap-10 items-center">
            <div className=" w-full lg:px-0 px-5 lg:w-[50%]">
              <img
                width="666"
                height="394"
                src="https://tv-flex.com/wp-content/themes/iptvfiesta/thumbs/sport-banner.webp"
              />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start ">
              <h2 className="lg:text-3xl text-2xl font-semibold pt-4">
                Looking for the ultimate spot to catch your favorite{" "}
                <b>
                  <span className="gradient_text">live sports</span>
                </b>
                ?
              </h2>
              <p className=" text-[#7f8ea3] py-5 lg:text-lg">
                With Best iptv providers , Discover where to stream your
                preferred games online and stay on top of your teams and
                competitions! Whether you’re a passionate football fan, a
                basketball enthusiast, or a die-hard tennis supporter, we have
                you covered. Stay connected with your beloved teams and keep up
                with thrilling competitions from the comfort of your own home.
              </p>
              <button className=" lg:self-start self-center mt-8 lg:mt-0 text-white  w-fit lg:block uppercase gradient_bg p-3 px-10 text-sm lg:text-lg font-semibold rounded-full">
                Today exclusive: 50% OFF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className=" w-full mt-5 flex flex-col text-white pb-24 justify-center items-center">
        <div className=" w-full flex flex-col justify-center items-center  max-w-7xl">
          <span className="text-center text-xl text-primary  ">FAQ's</span>
          <h2 className="text-4xl max-w-2xl text-center pb-10 font-bold pt-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <button className="  self-center mt-8  text-white  w-fit lg:block uppercase gradient_bg p-3 px-10 text-sm lg:text-lg font-semibold rounded-full">
          LAST CHANCE: 50% Off Today!
        </button>
        <h2 className="text-xl uppercase max-w-2xl text-center  font-bold pt-4">
          ONE TIME PAYMENT - MONEY BACK GUARANTEE
        </h2>
      </div>
    </div>
  );
};

export default Home;
