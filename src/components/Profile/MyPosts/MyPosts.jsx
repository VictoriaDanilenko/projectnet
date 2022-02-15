import React from "react";
import p from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
  return (
  <div className={p.item}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={p.posts}>  
        <Post message='This is my first post!'/>
        <Post message='Hello everyone!'/>  
        <Post message='I am happy, and you?!'/>
        <Post message='Wow it is so cool!!'/>
        <Post message='I like it!'/>
        <Post message='Super communication!'/>
      </div>
    </div>
  )
}

export default MyPosts;
