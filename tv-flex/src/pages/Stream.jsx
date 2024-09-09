import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stream() {
    const [channels, setChannels] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:8000/api/channels', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setChannels(response.data);
            } catch (err) {
                setError('Failed to fetch channels. Please try again later.');
            }
        };

        fetchChannels();
    }, []);

    return (
        <div className="container">
            <h1>Channel List</h1>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul>
                    {channels.map(channel => (
                        <li key={channel.id}>
                            {channel.name} - {channel.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ChannelListPage;
