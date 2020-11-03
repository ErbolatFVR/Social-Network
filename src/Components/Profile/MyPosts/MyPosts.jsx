import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={css.content}>
            <div>
                <textarea  className={css.textarea} cols="80" rows="5"></textarea>
            </div>
            <div>
                <button >Add Post</button>
            </div>
            
            <div>

                <Post message="Hi, How are you?" like="2"/>
                <Post message="It's my first post" like="5"/>
                <Post message="Look at this" like="9"/>

            </div>
        </div>
    )
}


export default MyPosts;