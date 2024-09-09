import React from "react";
import Info_Layout from "../layout/Info_Layout";

function Refund() {
  return (
    <div className=" text-white pt-20">
      <Info_Layout title={"Refund Policy"}>
        <div className=" flex flex-col justify-center items-center">
          <div className=" w-full max-w-7xl px-5 lg:px-0 lg:text-lg py-16">
            <div id="insidepage-container">
              <div className="inside-content">
                <h4 className=" text-xl mb-2">
                  <strong>7 Days Money Back Guarantee</strong>
                </h4>
                <p>
                  At <strong>WEBSITE</strong>, we want to ensure that you are{" "}
                  <strong>100% happy</strong> with our service. If you have any
                  technical queries, do not hesitate to contact us. Our tech
                  team will not leave your side until you’re watching TV!
                  However, if you feel the service you purchased are not the
                  best fit for your requirements and you attempted to resolve
                  issues with our support staff, we want to make things right.
                </p>

                <p className=" pt-5">
                  Although we’d love to know where things went wrong, or how we
                  can improve, follow the steps below for full refund{" "}
                  <strong>within 7 days</strong> of your date purchase. If the{" "}
                  <strong>7 days</strong> has been passed and you have a problem
                  you can contact ay time via our{" "}
                  <a href="#" target="_blank" rel="noopener">
                    <strong>Whatsapp</strong>
                  </a>{" "}
                  or&nbsp;via{" "}
                  <a href="mailto:support@paneliptv.co">
                    <strong>Email</strong>
                  </a>{" "}
                  to fix your problem.
                </p>

                <h4 className=" text-2xl my-3 mt-5">
                  <strong>Requesting a Refund Steps:</strong>
                </h4>
                <div className=" pr-10 ">
                  <ul className="list-disc list-outside ms-8">
                    <li className="">
                      Contact us via{" "}
                      <a
                        href="#"
                        data-type="link"
                        data-id="#"
                        target="_blank"
                        rel="noopener"
                      >
                        <strong>whatsapp</strong>
                      </a>{" "}
                      or via our{" "}
                      <a href="#">
                        <strong>support email</strong>
                      </a>
                      .
                    </li>
                    <li>
                      Use the same email address you use to buy our services.
                    </li>
                    <li>include your invoice number</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Info_Layout>
    </div>
  );
}

export default Refund;
