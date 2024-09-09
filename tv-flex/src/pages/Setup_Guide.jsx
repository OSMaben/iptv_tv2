import React, { useState, useEffect } from "react";
import Set_Up_Guide_List from "../components/Set_Up_Guide_List";
import SanityClient from "../client";

function Setup_Guide() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const query = '*[_type == "question"]';

    SanityClient.fetch(query).then((question) => {
      setQuestions(question);
      console.log(question);
    });
  }, []);
  return (
    <section className=" py-10 min-h-[85vh] pt-40 w-full flex flex-col justify-center items-center">
      <div className=" text-center  max-w-7xl w-full lg:w-4/6  flex flex-col justify-center items-center">
        <h1 className=" font-semibold leading-normal text-2xl lg:text-4xl text-white">
          Installation tutorial
        </h1>

        <div className=" mt-3 px-5">
          <p className=" text-[#7f8ea3]  max-w-4xl  text-base lg:text-xl ">
            Our IPTV services can be accessed from a wide range of devices, If
            you can’t find your device, don’t be concerned. We Support All the
            devices and all the apps. We will provide assistance to you. Simply{" "}
            <a href="#" className=" text-primary">
              Contact us.
            </a>
          </p>
        </div>
        <Set_Up_Guide_List questions={questions} />
      </div>
    </section>
  );
}

export default Setup_Guide;
