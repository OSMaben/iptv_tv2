import React from "react";
import Info_Layout from "../layout/Info_Layout";

function Tutorial() {
  return (
    <div className="w-full pt-32">
        <video className="h-full w-full rounded-lg w-[70%]  m-auto  " controls>
            <source src="src/assets/video/tutorial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default Tutorial;
