import React from "react";
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  return (
  <div className={c.content}>
    <div>
      <img src="https://images.unsplash.
com/photo-1455540904194-fc101941273a?
ixlib=rb-1.2.1&
ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW5n
bGlzaCUyMHN0dWR5fGVufDB8fDB8fA%3D%3D&
auto=format&fit=crop&w=400&q=60" alt="learn english"/>
    </div>
    <div>ava+description</div>
    <MyPosts/>
  </div>
)
}

export default Profile;
