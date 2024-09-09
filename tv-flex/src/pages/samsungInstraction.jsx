import React from "react";

function SamsungInstraction() {
    return (
        <section>
            <div className="howTpUpload  w-[70%] pt-24 m-auto">
                <p className="text-center text-white my-5 text-base  lg:text-xl">
                        <b className="text-center text-primary">Samsung Smart Tv</b> 
                    </p>
                <div className="content_of_howTo">
                        <br></br>
                        <br></br>
                    <strong>please follow our steps:</strong>
                    <ol className="list-decimal list-inside">
                        <li className="text-white leading-8">Connect your USB to computer.</li>
                        <img src="src/assets/tizen1.jpg " alt="" />
                        <li className="text-white leading-8">Open File Explorer on computer. Open This pc folder.</li>
                        <img src="src/assets/tizen2.jpg " alt="" />
                        <li className="text-white leading-8">Right click on the USB drive, and choose Properties.</li>
                        <img src="src/assets/tizen3.jpg " alt="" />
                        <li className="text-white leading-8">See “File System:” on General tab and chack file system FAT32.</li>
                        <img src="src/assets/tizen4.jpg " alt="" />
                        <li className="text-white leading-8">Download the app from https://netiptv.eu/NetiptvUsb.zip    </li>
                        <img src="src/assets/tizen5.jpg " alt="" />
                        <li className="text-white leading-8">Click Show in folder   </li>
                        <img src="src/assets/tizen6.jpg " alt="" />
                        <li className="text-white leading-8">Open dowloads folder</li>
                        <img src="src/assets/tizen7.jpg " alt="" />
                        <li className="text-white leading-8">Right Click and click extract All</li>
                        <img src="src/assets/tizen8.jpg " alt="" />
                        <li className="text-white leading-8">Open Netiptv_Tizen folder</li>
                        <img src="src/assets/tizen9.jpg " alt="" />
                        <li className="text-white leading-8">Copy userwidget folder</li>
                        <img src="src/assets/tizen10.jpg " alt="" />
                        <li className="text-white leading-8"> Paste from root usb folder</li>
                        <img src="src/assets/tizen11.jpg " alt="" />
                        <li className="text-white leading-8"> Eject usb from your pc.</li>
                        <img src="src/assets/tizen12.jpg " alt="" />
                        <li className="text-white leading-8"> Connect your USB to samsung TV.</li>
                        <img src="src/assets/tizen13.jpg " alt="" />
                        <li className="text-white leading-8"> Open samsung TV and waiting installation widget</li>
                        <img src="src/assets/tizen14.jpg " alt="" />
                        <li className="text-white leading-8"> Open apss from samsung TV</li>
                        <img src="src/assets/tizen15.jpg " alt="" />
                        <li className="text-white leading-8"> Find Net ipTV apps</li>
                        <img src="src/assets/tizen16.jpg " alt="" />
                        <li className="text-white leading-8"> Press enter key open Net ipTV application</li>
                        <img src="src/assets/tizen17.jpg " alt="" />
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default SamsungInstraction;
