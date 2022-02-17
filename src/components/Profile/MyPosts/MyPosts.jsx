import React from "react";
import p from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {
  
  return (
  <div className={p.item}>
      My posts
      <div> 
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={p.posts}>  
        <Post message='This is my first post!' likesCount='5'/>
        <Post message='Hello everyone!' likesCount='16'/>  
        <Post message='I am happy, and you?!' likesCount='7'/>
        <Post message='Wow it is so cool!!' likesCount='3'/> 
        <Post message='I like it!' likesCount='5'/>
        <Post message='Super communication!' likesCount='55'/>
      </div>
    </div>
  )
}

export default MyPosts;
