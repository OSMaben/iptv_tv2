import React, { useState, useEffect } from "react";
import Channel_List_View from "../components/Channel_List_View/Channel_List_View";
import Channel_List_Card from "../components/Channel_List_View/Channel_List_Card";
import client from "../client";

function Channel_List() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allChannels, setAllChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);

  useEffect(() => {
    const query = '*[_type == "channel"]';

    client.fetch(query).then((chann) => {
      setAllChannels(chann);
      console.log(chann);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredChannels = allChannels.filter(
        (channel) =>
          channel.Name &&
          channel.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredChannels(filteredChannels);
      console.log(filteredChannels, "filteredChannels");
    } else {
      setFilteredChannels(allChannels);
    }
  }, [searchTerm, allChannels]);
  return (
    <section className="  pb-10 pt-40 w-full flex flex-col justify-center items-center">
      <div className=" text-center w-full  flex flex-col justify-center items-center">
        <h1 className=" font-semibold leading-normal text-2xl lg:text-4xl text-white">
          Discover our vast and diverse channels selection
        </h1>

        <div className=" mt-3 px-5">
          <p className=" text-[#7f8ea3]  max-w-7xl text-base lg:text-xl ">
            Elevate your entertainment experience with our extensive selection
            of over{" "}
            <b className=" text-primary">
              172,000 premium channels,Movies And Series
            </b>
            . From live sports and news to international programming and more,
            we offer a diverse range of high-quality content to cater to every
            interest
          </p>

          <p className=" text-white my-5 text-base  lg:text-xl">
            <b className=" text-primary">Attention Customers:</b> Having Trouble
            Finding a Specific Channel?{" "}
            <a href="#" className=" text-primary">
              Reach Out to Us!
            </a>
          </p>
        </div>
        <div className=" w-full max-w-7xl">
          <form className=" pt-5 lg:px-0 px-5  w-full">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className=" flex flex-col  justify-center items-center  ">
              <div className=" relative  max-w-7xl  w-full lg:w-3/6  ">
                <div className="absolute   inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full bg-white p-3 ps-10 lg:placeholder:text-lg  text-sm text-gray-900 border border-gray-900 rounded-full"
                  placeholder="Type your favourite channel... "
                  required
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className=" w-full rounded-2xl mt-5 flex fleex-col justify-center items-center ">
            <div className=" w-full lg:w-4/6 hideScroll bg-gray-950 border-gray-900 border-[0.2px] overflow-hidden overflow-y-scroll  flex flex-col justify-start items-center gap-3 p-3 lg:p-5 max-w-7xl   shadow-xl h-[40rem] rounded-2xl">
              {filteredChannels.map((channel, index) => (
                <Channel_List_Card channel={channel} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Channel_List;
