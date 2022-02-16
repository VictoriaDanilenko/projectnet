import React from "react";
import f from './Post.module.css'


const Post = (props) => {

  return (
        <div className={f.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
          {props.message}
            <div>
        <span>like {props.like}</span>
            </div>
        </div>


  )
}

export default Post;
  