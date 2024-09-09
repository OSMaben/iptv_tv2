import React from "react";

function Info_Layout({ title, children }) {
  return (
    <div>
      <div className=" w-full p-5  text-center py-10 bg-gradient-to-r gradient_bg from-primary to-">
        <h1 className=" lg:text-4xl text-3xl tex-white font-semibold ">
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}

export default Info_Layout;
