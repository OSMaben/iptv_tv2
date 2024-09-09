import React, { useState, useEffect } from "react";
import SanityClient from "../../client";

function Channel_List_Card({ channel, index }) {
  const [show, setShow] = useState(null);
  useEffect(() => {
    console.log("====================================");
    console.log(channel, "here");
    console.log("====================================");
  }, [channel]);

  const checkCondition = () => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };
  return (
    <>
      <div
        onClick={checkCondition}
        className=" rounded-xl  lg:text-lg font-normal shadow border-[0.5px] bg-gray-900 border-gray-800 text-white flex flex-row justify-start  items-center gap-3  w-full p-3"
      >
        <p>{channel.flag}</p> <p>| </p>
        <p>{channel.Name}</p>
      </div>
      {show !== null && show === index ? (
        <div className="w-full px-4 text-left mt-0 text-gray-200 rounded-lg py-4 bg-gray-600">
          {channel.channels.map((ch) => (
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <p>{ch.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Channel_List_Card;
