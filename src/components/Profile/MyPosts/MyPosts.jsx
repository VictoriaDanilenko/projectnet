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
        <Post message='This is my first post!' Post like='5'  />
        <Post message='Hello everyone!' Post like='16'/>  
        <Post message='I am happy, and you?!' Post like='7'/>
        <Post message='Wow it is so cool!!' Post like='3'/> 
        <Post message='I like it!' Post like='5'/>
        <Post message='Super communication!' Post like='55'/>
      </div>
    </div>
  )
}

export default MyPosts;
