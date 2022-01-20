import React from "react";
import p from './MyPosts.module.css'


const MyPosts = () => {
  return (
  <div className={p.item}>
      My post
      <div>New post</div>
      <div className = 'posts'>
        <div className = {p.item}>post 1</div>
        <div className = {p.item}>post 2</div>
        <div className = {p.item}>post 3</div>
        <div className = {p.item}>post 4</div>
      </div>
    </div>
  )
}

export default MyPosts;
