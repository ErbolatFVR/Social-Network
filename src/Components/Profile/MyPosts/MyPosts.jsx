import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={css.content}>

      <div> 
        <img src="https://лада.онлайн/uploads/posts/2016-01/1452856264_logo.jpg"></img>
      </div>

      <textarea></textarea>

      <button>Add Post</button>

      <div>

        <Post />
        <Post />
        <Post />

      </div>
    </div>
  )
}


export default MyPosts;