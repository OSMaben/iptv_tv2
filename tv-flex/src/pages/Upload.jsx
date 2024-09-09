import React, { useState } from "react";
import axios from "axios";

function Upload() {
    const [mac, setMac] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [channelList, setChannelList] = useState('');
    const [forgotMac, setForgotMac] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');
    const [forgotStage, setForgotStage] = useState(1); // 1: Enter MAC, 2: Enter Email

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/authenticate', {
                mac_address: mac,
                password: password
            });
            if (response.data.token && response.data.mac_address_id) {
                setSuccess('Authenticated successfully');
                setIsAuthenticated(true);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('mac_address_id', response.data.mac_address_id);
            }
        } catch (error) {
            setError('Authentication failed');
            console.error('There was an error!', error);
        }
    };

    const handleChannelListSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');
            const macAddressId = localStorage.getItem('mac_address_id');
            console.log(token, macAddressId);

            const response = await axios.post('http://127.0.0.1:8000/api/channels', {
                mac_address_id: macAddressId,
                m3u_list: channelList
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                setSuccess('Channel list added successfully');
                console.log(success);
                setChannelList('');
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setError('Validation error. Please check your input.');
                console.log('Validation errors:', error.response.data);
            } else {
                setError('Failed to add channel list');
                console.error('Error adding channel list:', error);
            }
        }
    };

    const handleDeleteChannels = async () => {
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');
            const macAddressId = localStorage.getItem('mac_address_id');

            const response = await axios.delete(`http://127.0.0.1:8000/api/channels/${macAddressId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setSuccess(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('No channels found for this MAC address.');
            } else {
                setError('Failed to delete channels');
                console.error('Error deleting channels:', error);
            }
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (forgotStage === 1) {
            // Check MAC address
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/forgot-password', {
                    mac_address: forgotMac
                });

                if (response.status === 200) {
                    setSuccess('MAC address found. Please enter your email.');
                    setForgotStage(2);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError('MAC address not found.');
                } else {
                    setError('An error occurred. Please try again.');
                    console.error('Error:', error);
                }
            }
        } else if (forgotStage === 2) {
            // Send reset code
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/send-reset-code', {
                    mac_address: forgotMac,
                    email: forgotEmail
                });

                if (response.status === 200) {
                    setSuccess('Reset code sent to your email.');
                    setForgotStage(1);
                    setForgotMac('');
                    setForgotEmail('');
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError('MAC address not found.');
                } else {
                    setError('An error occurred. Please try again.');
                    console.error('Error:', error);
                }
            }
        }
    };

    return (
        <section className="pb-10 pt-40 w-full flex flex-col justify-center items-center">
            <div className="text-center w-full flex flex-col justify-center items-center">
                <h1 className="font-semibold leading-normal text-2xl lg:text-4xl text-white">
                    DROP YOUR URL
                </h1>
                <div className="mt-3 px-5">
                    <p className="text-red my-5 text-base lg:text-l">
                        <b className="text-red-400">UPLOAD / DELETE URLS</b>
                    </p>
                    <p className="text-[#7f8ea3] max-w-7xl text-base lg:text-xl">
                        With the new update we ask you to switch the Internet modem off and on again.
                        Thus, the Net ipTV APP will continue to function as usual.
                        {" "}
                        <b className="text-primary">
                            We ask for your understanding.
                        </b>
                        NETIPTV TEAM
                    </p>
                </div>
            </div>

            <div className="w-full mt-12">
                <div className="flex m-auto justify-center gap-8">
                    {!isAuthenticated && (
                        <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6" onSubmit={handleSubmit}>
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
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="w-full uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">Authenticate</button>
                            </form>
                            {error && <p className="text-red-500 mt-3">{error}</p>}
                            {success && <p className="text-green-500 mt-3">{success}</p>}
                        </div>
                    )}

                    {isAuthenticated && (
                        <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6" onSubmit={handleChannelListSubmit}>
                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Channel List</h5>
                                <div>
                                    <input
                                        type="text"
                                        name="channelList"
                                        id="channelList"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="M3U List URL"
                                        required
                                        value={channelList}
                                        onChange={(e) => setChannelList(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="w-full uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">Submit List</button>
                            </form>
                            {error && <p className="text-red-500 mt-3">{error}</p>}
                            {success && <p className="text-green-500 mt-3">{success}</p>}
                        </div>
                    )}

                    <div class="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" >
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Delete All Channels</h5>
                            <div>
                                <input type="text" name="mac" id="mac" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Mac" required />
                            </div>
                            <button onClick={handleDeleteChannels} type="button" class="w-full uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">Delete All</button>
                        </form>
                        {error && <p className="text-red-500 mt-3">{error}</p>}
                        {success && <p className="text-green-500 mt-3">{success}</p>}
                    </div>

                    <div className="w-full h-max max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={handleForgotPasswordSubmit}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forgot Password</h5>
                            {forgotStage === 1 && (
                                <div>
                                    <input
                                        type="text"
                                        name="forgotMac"
                                        id="forgotMac"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Mac"
                                        required
                                        value={forgotMac}
                                        onChange={(e) => setForgotMac(e.target.value)}
                                    />
                                </div>
                            )}
                            {forgotStage === 2 && (
                                <div>
                                    <input
                                        type="email"
                                        name="forgotEmail"
                                        id="forgotEmail"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Email"
                                        required
                                        value={forgotEmail}
                                        onChange={(e) => setForgotEmail(e.target.value)}
                                    />
                                </div>
                            )}
                            <button type="submit" className="w-full uppercase gradient_bg p-2.5 px-6 text-sm lg:text-base font-semibold rounded-full text-white text-center">
                                {forgotStage === 1 ? 'get password' : 'Send Reset Code'}
                            </button>
                        </form>
                        {error && <p className="text-red-500 mt-3">{error}</p>}
                        {success && <p className="text-green-500 mt-3">{success}</p>}
                    </div>

                </div>
            </div>

            <div className="howToUpload w-[70%]">
                <h1 className="text-center font-semibold leading-normal text-2xl lg:text-4xl text-white">
                    App Name
                </h1>
                <div className="content_of_howTo">
                    <h3 className="text-xl text-white">Warning!</h3>
                    <p className="text-white">
                        Please use UTF-8 (NO BOM) encoding when editing and saving your playlist.
                        Use Keep online ONLY if you have problems loading playlist on your TV.
                        If they paid for it with their Mac address, it will be automatic.
                        NO CHANNELS are provided with activation, you have to add your own.
                        No information will be provided, where you can get a working playlist for your needs.
                        And please don't ask about channels.
                    </p>
                    <br />
                    <p className="text-white">
                        Upload your m3u list from your provider and connect your list with your Net ipTV MAC number.
                    </p>
                    <strong>Please follow our steps:</strong>
                    <ol className="list-decimal list-inside text-white leading-8">
                        <li>www.domain.eu/upload</li>
                        <li>add external playlist links (URLs), with auto-update</li>
                        <li>enter your TV MAC address or APP ID</li>
                        <li>enter Your M3U list</li>
                        <li>to confirm Recaptcha (i'am not Roboter)</li>
                        <li>please wait</li>
                        <li>enter send</li>
                        <li>please wait 5-10 second</li>
                        <li>restart your TV again or press reload key(0)</li>
                        <li>go to Net ipTV</li>
                        <li>Your List is ready</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Upload;
