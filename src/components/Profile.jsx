import React from "react";
import post from './Profile.module.css'


const Profile = () => {
  return <div className={post.content}>
    <div>
      <img src="https://images.unsplash.
com/photo-1455540904194-fc101941273a?
ixlib=rb-1.2.1&
ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW5n
bGlzaCUyMHN0dWR5fGVufDB8fDB8fA%3D%3D&
auto=format&fit=crop&w=400&q=60" alt="learn english"/>
    </div>
    <div>ava+description</div>
    <div>
      My post
      <div>New post</div>
      <div className = 'posts'>
        <div className = {post.item}>post 1</div>
        <div className = {post.item}>post 2</div>
        <div className = {post.item}>post 3</div>
        <div className = {post.item}>post 4</div>
      </div>
    </div>
  </div>

}

export default Profile;
