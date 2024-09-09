import React from "react";

function Feature_Card(props) {
  const { icon, title, description } = props;
  return (
    <div class="p-5 py-8 flex flex-col justify-center items-center text-center gap-3  rounded-xl border-[1px] border-gray-700">
      {icon}
      <div class="cyb-service-text cyb-headline pera-content">
        <h5 className=" text-2xl font-semibold">{title}</h5>
        <p className=" text-[#7f8ea3] text-base pt-3">{description}</p>
      </div>
    </div>
  );
}

export default Feature_Card;
