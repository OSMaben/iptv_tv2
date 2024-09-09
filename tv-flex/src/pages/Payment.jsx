import React from "react";

function Payment() {
    return (
        <section className="  pb-10 pt-40 w-full flex flex-col justify-center items-center">
            <div className=" text-center w-full  flex flex-col justify-center items-center">

                <h1 className=" font-semibold leading-normal text-2xl lg:text-4xl text-white">
                    Payment
                </h1>

                <div className=" mt-3 px-5">
                    <p className="text-red my-5 text-base  lg:text-l">
                        <b className=" text-red-400  ">CAREFULLY!</b>
                    </p>
                    <p className=" text-[#7f8ea3]  max-w-7xl text-base lg:text-xl ">
                        Please DO NOT pay if you do not have any transmitters for the application (no transmitters will be provided with your payment) or if something does not work for you as your payment does not solve any of these problems. Your payment amount will not be refunded if you do this.
                    </p>
                    <p className="text-red my-5 text-base  lg:text-l">
                        <b className=" text-red-400  ">PAYMENT</b>
                    </p>
                    <p className=" text-[#7f8ea3]  max-w-7xl text-base lg:text-xl ">
                        NO CHANNELS are provided with activation, you have to add your OWN. No information will be provided, where you can get a working playlist for your needs.No emails about SUCH questions will be answered.
                    </p>
                </div>
                <div className="image my-8">
                    <img src="src/assets/payment.png" className="rounded" alt="" />
                </div>
            </div>

            <div className="w-full mt-12">
                <div className="flex m-auto justify-center gap-8 ">

                    <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <p className="text-red my-5 text-base  lg:text-l">
                            <b className=" text-red-400  ">Payment Method</b>
                        </p>
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">for UNLIMETED</h5>
                            <span className="text-l font-medium text-gray-900 dark:text-white underline">13.99€</span>
                            <div>
                                <span className="text-l font-medium text-gray-900 dark:text-white">I accept the terms of Net ipTV activation and payment</span>
                                <input type="checkbox" className="mx-2" required />
                            </div>
                            <div>
                                <input type="text" name="mac" id="mac" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Mac" required />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email@email.com" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-grey-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">click to pay</button>

                        </form>
                    </div>

                    <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <p className="text-red my-5 text-base  lg:text-l">
                            <b className=" text-red-400  ">Payment Method</b>
                        </p>
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">for 24 Month</h5>
                            <span className="text-l font-medium text-gray-900 dark:text-white underline">6.79€</span>
                            <div>
                                <span className="text-l font-medium text-gray-900 dark:text-white">I accept the terms of Net ipTV activation and payment</span>
                                <input type="checkbox" className="mx-2" required />
                            </div>
                            <div>
                                <input type="text" name="mac" id="mac" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Mac" required />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email@email.com" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-grey-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">click to pay</button>

                        </form>
                    </div>

                </div>
            </div>


            <div className="howTpUpload  w-[70%] mt-10">
                <h1 className=" text-center font-semibold leading-normal text-2xl lg:text-4xl text-white">
                    ACTIVATION
                </h1>

                <div className="content_of_howTo">
                    <h3 className="text-xl text-white">NET IPTV ACTIVATION</h3>
                    <br></br>
                    <br></br>
                    <p className="text-white  mt-8">If you have any available smart device, you can download the application (free test version and a paid) in the official Apps Store</p>
                    <p className="text-white  mt-8">After you purchase a paid version of the app, you have to run the paid application version on your TV and the free trial version of the app can be deleted.</p>
                    <p className="text-white  mt-8">Smart TVs and supported devices can be activated after activation fee of 6.79 Euros for each TV/device..</p>
                    <p className="text-white  mt-8">To avoid activation delays, there is no need to wait until the trial version expires if everything is working fine for you. Use the credit card panel below to activate your TV/device instantly, in automatic mode. After trial expiration, your playlist is removed from TV as well as from the server.</p>
                    <p className="text-white  mt-8">Very important! Please DO NOT pay if you don't have any playlists to use with the application (no playlists are provided with activation payment) or if something is not working for you, because the payment won't solve any of these problems. And you will not be refunded if you do.</p>
                    <p className="text-white  mt-8">NO PLAYLISTS are provided with activation, you have to add your own. No information will be provided, where you can get a working playlist for your needs. And please don't ask about playlists.</p>
                    <p className="text-white  mt-8">Does Net ipTV contain any playlists? Where can I get a good playlist? No, Net ipTV application does not include any playlists and no information will be provided about where you can get playlists or channel packages..</p>
                    <p className="text-white  mt-8">My MAC address has changed after I switched to another connection type. Each TV has 2 MAC addresses (1st is WiFi, 2nd is Ethernet) and a 2nd MAC is activated automatically after you switch to another connection type and restart the app. MAC address is unique for every TV and cannot be changed manually. I get "Server (URL) connection timeout", "Check playlist URL" or "No playlist uploaded" messages, when starting the app, while my playlist URL that works on my computer, other devices and apps.</p>
                    <p className="text-white  mt-8">Try example test list http://netiptv.eu/netiptvTest.m3u (external URL) first, then then check your playlist for errors. Make sure your URL is a direct link, not a redirect and that it is currently online. You can also try downloading your playlist file by putting the playlist URL in the internet browser address field and use it as a static playlist at My list page. Additionally, try reducing your playlist size by removing channels/movies. If your playlist doesn't appear on TV or disappears after restart, try checking Keep online box, when uploading the playlist. You can also try resetting Smart HUB or turn your TV off and on to clear the TV cache if you have Samsung TV. TVs have limited memory available for app storage, so if your playlist is too big (~5 Mb), it will fail to save in TV's memory. Why do I get "Stream failed", "Cannot connect", "Buffering..." messages with my playlist that works on my computer and other devices? Try example test list</p>
                    <p className="text-white  mt-8">http://netiptv.eu/netiptvTest.m3u first, then make sure all your stream links work (not dead)</p>
                    <p className="text-white  mt-8">and codecs are supported by your TV. Every TV make and model are totally different and may or may not support specific stream formats: - Samsung supported formats and codecs.</p>
                </div>
            </div>


            <div className="p-8">
                <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                    <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
                    <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                    <div className="space-y-12 px-2 xl:px-16 mt-12">
                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Services</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">With the registration, the customer has unlimited access to the TV APP. No TV channels or streams are provided with activation. The Net IPTV application does not contain any channels and no information is provided about where the customer might receive channels or channel packets. In addition, application developers are not responsible for the content uploaded to Net IPTV.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Technical equipment</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">For access to our server the TV Mac address is required. This will appear when the app is open. Each TV has 2 MAC addresses (1st is WiFi, 2nd is Ethernet) and a 2nd MAC is automatically activated after switching to a different connection type and restarting the app. The MAC address is unique for each TV and can not be changed manually. As a test list, the M3u sample list is offered on the website. So you can tell if all your stream links work and codecs are supported by your TV. Each TV brand and model is completely different and may or may not support specific stream formats: SAMSUNG ANDROID</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Contract conclusion and contract period</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The contract period is twenty four months and begins with the registration. After expiration of the period of use, you can re-purchase the app. The registration takes place with the Mac address on the homepage.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Costs</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The technical software (app) is offered for free for a week for testing. At the end of the trial period you will be asked to pay for the app 6.79 Euro on the website.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Revocation</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The contract concluded with the registration can be revoked within two weeks from the confirmation of the conclusion of the contract without stating a reason, if the customer consumer i.S.v. § 13 BGB is.</span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Termination</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The contract can be terminated at within 14 days without giving any reason.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold"> Compensation and right of retention</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The user has a right to compensation only if his claims are determined without further legal claim. The user can also assert claims for damages if complaints or counterclaims are asserted from the purchase contract. The customer is only authorized to exercise a right of retention insofar as his counterclaim is based on the contractual relationship.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold">Usage and copyrights</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">The content provided by Net IPTV may only be used for private purposes. Commercial use is prohibited. A permanent storage, as well as the resale are not permitted.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-grey-600">
                                    <span className="text-4xl text-grey-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-grey-600 font-bold"> Data protection</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">Personal customer data is stored and used exclusively for contractual purposes. Upon termination of the contract, the personal data will be deleted. In addition, the general data protection regulations apply.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >



    );
}

export default Payment;
