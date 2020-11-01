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

                <Post message="Hi, How are you?" like="2"/>
                <Post message="It's my first post" like="5"/>
                <Post message="Look at this" like="9"/>

            </div>
        </div>
    )
}


export default MyPosts;