import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import Profilepic from './assets/profile_pic.png'
import db from './Firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            const postsFromDb = collection(db, 'posts');
            const postSnapshot = await getDocs(postsFromDb);
            const postList = postSnapshot.docs.map((doc, index) => doc.data());
            setPosts(postList)
        }

        fetchPosts()

    }, []);



    return (

        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>


            <TweetBox />
            <FlipMove>
            {
                posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        avatar={post.avatar}
                        username={post.username}
                        text={post.text}
                        image={post.image}
                        verified={post.verified}
                    />
                ))
            }
            </FlipMove>
 
        </div>
    )
}

export default Feed

