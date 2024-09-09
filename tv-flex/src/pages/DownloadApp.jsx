import React from "react";



function DownloadApp() {
    return (
        <section className="  pb-10 pt-40 w-full flex flex-col justify-center items-center">
            <div className=" text-center w-full  flex flex-col justify-center items-center">
                   
                <h1 className=" font-semibold leading-normal text-2xl lg:text-4xl text-white">
                Download
                </h1>
            </div>
            <div  className="w-full mt-12">
                <div className="flex m-auto justify-center gap-8 ">
                    <div class="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Download App</h5>
                            <div>
                                <img className="rounded" src="src/assets/samsung-min.png" />
                            </div>
                            <a href="https://netiptv.eu/NetiptvUsb.zip" type="submit" class="hidden lg:block uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">download App</a>
                            <div className="text-center m-0">
                            <span className="text-white text-center"> see <a href="/samsung" className="underline">Instructions</a> </span>
                            </div>
                        </form>
                    </div>
                    <div class="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Download App</h5>
                            <div>
                                <img className="rounded" src="src/assets/2.png" alt="" />
                            </div>
                            <a href="https://netiptv.eu/netiptv.apk" type="submit" class="hidden lg:block uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">Download App</a>
                            <div className="text-center m-0">
                            <span className="text-white text-center"> see <a href="/amazonTv" className="underline">Instructions</a> </span>
                            </div>
                        </form>
                    </div>
                    <div class="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Download App</h5>
                            <div>
                                <img className="rounded" src="src/assets/1.png" alt="" />
                            </div>
                            <a href="https://netiptv.eu/netiptv.apk" type="submit" class="hidden lg:block uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">Download App</a>
                            <div className="text-center m-0">
                            <span className="text-white text-center"> see <a href="/androidTv" className="underline">Instructions</a> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="howTpUpload  w-[70%]">
                    <p className="text-center text-white my-5 text-base  lg:text-xl">
                            <b className="text-center text-primary">PLAYLIST UPLOAD TO</b> 
                        </p>
                    <h1 className=" text-center font-semibold leading-normal text-2xl lg:text-4xl text-white">
                       App Name
                    </h1>

                    <div className="content_of_howTo">
                        <h3 className="text-xl">Warning!</h3>

                        <p className="text-white">Please use UTF-8 (NO BOM) encoding when editing and saving your playlist Use Keep online ONLY if you have problems loading playlist on your TV. If they paid for it with their Mac address, it will be automatic. NO CHANNELS are provided with activation, you have to add your own. No information will be provided, where you can get a working playlist for your needs. And please don't ask about channels.</p>
                            <br></br>
                            <br></br>
                        <p className="text-white">Upload your m3u list from your provider and connect your list with your Net ipTV MAC number.</p>
                        <strong>please follow our steps:</strong>
                        <ol className="list-decimal list-inside">
                            <li className="text-white leading-8">www.domain.eu/upload</li>
                            <li className="text-white leading-8">add external playlist links (URLs), with auto-update</li>
                            <li className="text-white leading-8">enter your TV MAC address or APP ID</li>
                            <li className="text-white leading-8">enter Your M3U list</li>
                            <li className="text-white leading-8">to confirm Recaptcha (i'am not Roboter)</li>
                            <li className="text-white leading-8">please wait</li>
                            <li className="text-white leading-8">enter send</li>
                            <li className="text-white leading-8">please wait 5-10 second</li>
                            <li className="text-white leading-8">restart your TV again or press reload key(0)</li>
                            <li className="text-white leading-8">go to Net ipTV</li>
                            <li className="text-white leading-8"> Your List is ready</li>
                        </ol>
                    </div>
            </div>
        </section>
    );
}

export default DownloadApp;
