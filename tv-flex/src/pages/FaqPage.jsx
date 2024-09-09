import React from "react";
import Info_Layout from "../layout/Info_Layout";

function Faqpage() {
    return (
        <div className="w-full pt-32">
            <div className="howTpUpload  w-[70%] pt-24 m-auto">
                <p className="text-center text-white my-5 text-base  lg:text-xl">
                    <b className="text-center text-primary">Frequently Asked Questions</b>
                </p>
                <img src="src/assets/faq.png " className="m-auto" alt=" " />
            </div>


            <div class='accordion-group w-[70%] m-auto' data-accordion="default-accordion">
                <div class='accordion pb-4 border-b border-solid border-gray-200' id='basic-heading-one-default'>
                    <button class='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600' aria-controls='basic-collapse-one-default'>
                        <h5 className="text-white"> Where can I download Net ipTV from? </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-one-default' class='accordion-content w-full px-0 overflow-hidden pr-4 ' aria-labelledby='basic-heading-one-default'>
                        <p class='text-base text-gray-400 leading-6'>You can download it at:

                            Android App Store or Google Play Store
                            <br></br>
                            Samsung Tizen TV App Store
                            <br></br>

                            LG Content Store / LG App Store
                            <br></br>

                            Apple App Store</p>
                    </div>
                </div>
                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-two-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-two-default'>
                        <h5 className="text-white"> How can I install manually Net IPTV (APK Data)? </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-two-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-two-default'>
                        <p class='text-sm text-gray-400 leading-6'>Net ipTV APP is shown on our homepage with the individual steps.
                            <br></br>
                            You can install Net ipTV manually for all devices (excluded: LG TV and Apple devices).
                            <br></br>

                            The APK file can also be found in the download area under the steps.
                            <br></br>

                            Download</p>
                    </div>
                </div>
                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">How can I pay Net ipTV? </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>You can only pay with us on the homepage. You can also pay with your credit card, bank account and debit card.
                            Payment</p>
                    </div>
                </div>

                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">Does Net ipTV media player contain channels and where can I get a playlist?</h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>No, the Net ipTV application does not contain any channels and no information is provided about where to get channels or channel packages. In addition, application developers are not responsible for the content uploaded to Net ipTV.</p>
                    </div>
                </div>

                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">My MAC address changed after switching to a different connection type (Wifi / LAN).</h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>Each TV has 2 MAC addresses (1st is WiFi, 2nd is Ethernet) and a 2nd MAC is activated automatically after you switch to another connection type and restart Net ipTV. MAC address is unique for every TV and cannot be changed manually.

                            Since app version 3.0.0 for LG webOS TV´s, there is no access to MAC address, so only APP- ID is available in the app, but it will be activated automatically after Net ipTV launch if you activated your TV before.</p>
                    </div>
                </div>

                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">Why do I get the message "Try", "Connection problem", "Error”, “Stream failed” with my playlist on my device?    </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>First try the sample test list from Net ipTV:

                            netiptvTest.m3u
                            Then make sure everything works and the codecs are supported by your TV.

                            Every TV manufacturer and model are completely different and may support certain stream formats.

                            It is also important that you offer good internet performance for your device.</p>
                    </div>
                </div>

                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">Can I pay more than once for a MAC address?
                        </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>No, you can only pay once for your MAC address.</p>
                    </div>
                </div>


                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">How can I get my money back for the unwanted MAC address when I make a payment with 2 different MAC addresses?

                        </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>You can reclaim the incorrectly paid MAC address within 14 days.

                        </p>
                    </div>
                </div>

                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white">How do I upload my own M3U list?


                        </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>You can upload your correct M3U list on our homepage. Please check in advance whether your M3U list works.

                            Upload

                        </p>
                    </div>
                </div>
                <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
                    <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text--600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
                        <h5 className="text-white"> How can I reset my password for my M3U list?

                        </h5>
                        <svg class='text-gray-400 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
                        <p class='text-sm text-gray-400 leading-6'>You can reset your password on our homepage:
                            <br></br>
                            FORGOT / DELETE PASSWORD area
                            <br></br>

                            Enter the correct MAC address

                            <br></br>
                            Upload

                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Faqpage;
