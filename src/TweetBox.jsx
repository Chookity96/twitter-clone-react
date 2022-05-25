import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@mui/material/';
import ProfilePic from './assets/profile_pic.png'
import db from './Firebase';
import { doc, setDoc, collection } from "firebase/firestore/lite"; 
import { addDoc } from "firebase/firestore/lite"; 

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    async function sendTweet(e) {
        e.preventDefault()

        await addDoc(collection(db, "posts"), {
            displayName: "Jegathees",
            username: "jegatheessa",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        })

        setTweetImage('')
        setTweetMessage('')
    }



    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={ProfilePic} />
                    <input type="text" placeholder="What's happening?" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} />
                </div>
                <input className="tweetBox__imageInput" type="text" placeholder="Optional: Enter image URL" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)}/>
                <Button type="submit" className="tweetBox__btn" onClick={sendTweet}>Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox