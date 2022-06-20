import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1537892971755950081"} />

        <TwitterTimelineEmbed sourceType="profile" screenName="imgver" options={{ height: 400 }} />

        <TwitterShareButton url={"https://www.facebook.com/CuteOverrated/"} options={{ text: "#This is soo cute", via: "imgver" }} />
        
      </div>
    </div>
  )
}

export default Widgets