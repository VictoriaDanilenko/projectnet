import React from "react";
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
  <div className={c.content}>
    <div>
      <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80" alt="learn english"/>
    </div>
    <div>ava+description</div>
    <MyPosts/>
  </div>
)
}

export default Profile;
