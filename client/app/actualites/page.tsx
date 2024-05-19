'use client'
import React, { useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';


const ActualitesPage = () => {
    type PostTwitter = {
        id: number;
        post_id: string;
        user: string;
        tags: string;
        };

    const [tweets, setTweets] = useState<PostTwitter[]>([])

    useEffect(() => {
        fetch('https://dissuasio.fr:3001/api/PostTwitter/GetAll') 
            .then(response => response.json())
            .then(data => setTweets(data))
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    return (
        <>
            <h1 className="text-white sm:text-black">Actualités</h1>
            <ul>
                {tweets.map(tweet => (
                    <Tweet key={tweet.id} id={tweet.post_id} />
                ))}
            </ul>
        </>
    );
};

export default ActualitesPage;
