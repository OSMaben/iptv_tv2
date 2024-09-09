import React, { useState } from "react";
import axios from "axios";

function Check_mac() {
    const [mac, setMac] = useState('');
    const [message, setMessage] = useState('');

    const handleCheckStatus = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/mac-address/check-status', {
                mac_address: mac
            });

            if (response.data.message) {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Failed to check status. Please try again.');
            console.error('There was an error!', error);
        }
    };

    const getMessageClass = () => {
        if (message.includes('not active') || message.includes('invalid')) {
            return 'text-red-500 mt-3';
        }
        return 'text-green-500 mt-3';
    };

    return (
        <section className="pb-10 pt-40 w-full flex flex-col justify-center items-center">
            <div className="text-center w-full flex flex-col justify-center items-center">
                <h1 className="font-semibold leading-normal text-2xl lg:text-4xl text-white">
                    Check MAC Address
                </h1>

                <div className="mt-3 px-5">
                    <p className="text-[#7f8ea3] max-w-7xl text-base lg:text-xl">
                        With your correct MAC number you can check your expire date.
                    </p>

                    <p className="text-red my-5 text-base lg:text-l">
                        <b className="text-red-400">CHECK MAC ADDRESS</b>
                    </p>
                </div>
            </div>

            <div className="w-full mt-12">
                <div className="flex m-auto justify-center gap-8">
                    <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={handleCheckStatus}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">MAC / APP ID</h5>
                            <div>
                                <input
                                    type="text"
                                    name="mac"
                                    id="mac"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Mac"
                                    required
                                    value={mac}
                                    onChange={(e) => setMac(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center w-full">
                                Check Status
                            </button>
                        </form>
                        {message && <p className={getMessageClass()}>{message}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Check_mac;
