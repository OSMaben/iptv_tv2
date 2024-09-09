import React, { useState, useEffect } from "react";
import Channel_List_Card from "./Channel_List_Card";

import client from "../../client";

function Channel_List_View({ searchTerm }) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const query = '*[_type == "channel" ]';

    client.fetch(query).then((chann) => {
      setChannels(chann);
      console.log(chann);
    });
  }, []);
  return (
    <div className=" w-full rounded-2xl mt-5 flex fleex-col justify-center items-center ">
      <div className=" w-full lg:w-4/6 hideScroll bg-gray-950 border-gray-900 border-[0.2px] overflow-hidden overflow-y-scroll  flex flex-col justify-start items-center gap-3 p-3 lg:p-5 max-w-7xl   shadow-xl h-[40rem] rounded-2xl">
        {channels.map((channel, index) => (
          <Channel_List_Card channel={channel} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Channel_List_View;
