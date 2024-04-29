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
        fetch('http://0.0.0.0:3001/api/PostTwitter/GetAll') 
            .then(response => response.json())
            .then(data => setTweets(data))
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    return (
        <>
            <h1>Actualités</h1>
            <ul>
                {tweets.map(tweet => (
                    <Tweet key={tweet.id} id={tweet.post_id} />
                ))}
            </ul>
        </>
    );
};

export default ActualitesPage;
