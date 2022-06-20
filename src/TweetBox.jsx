import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@mui/material/';
import ProfilePic from './assets/profile_pic.png'
import db from './Firebase';
import { doc, setDoc, collection } from "firebase/firestore/lite";
import { addDoc } from "firebase/firestore/lite";
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

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


	console.log(tweetImage)
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src={ProfilePic} />
					<input type="text" placeholder="What's happening?" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} />
				</div>
				<div className="tweetBox__icons">
					{/* <div className="tweetBox__image-upload">
						<label htmlFor="file-input">
							<PhotoOutlinedIcon className='tweetBox__icon'/>
						</label>
						<input id="file-input" type="file" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)}/>
					</div> */}
					<PhotoOutlinedIcon className='tweetBox__icon'/>
					<GifBoxOutlinedIcon className='tweetBox__icon' />
					<PollOutlinedIcon className='tweetBox__icon' />
					<SentimentSatisfiedOutlinedIcon className='tweetBox__icon' />
					<CalendarMonthOutlinedIcon className='tweetBox__icon' />
					<LocationOnOutlinedIcon className='tweetBox__icon' />
					<Button type="submit" className={`tweetBox__btn ${(!tweetMessage && !tweetImage) && "tweetBox__btn--disabled"}`} onClick={sendTweet} disabled={(!tweetMessage && !tweetImage)}>Tweet</Button>
				</div>
				<input className="tweetBox__imageInput" type="url" placeholder="Optional: Enter image URL" pattern="https://.*" size="30" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} />

			</form>

		</div>
	)
}

export default TweetBox