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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;
