import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postData = [
        {id:1, likesCount:12, post:'Hi, How are you?'},
        {id:2, likesCount:26, post:'It\'s my first post'},
        {id:3, likesCount:28, post:'Look at this'},
    ]
    return (

        <div className={css.content}>
            <div>
                <textarea  className={css.textarea} cols="80" rows="5"></textarea>
            </div>
            <div>
                <button >Add Post</button>
            </div>
            
            <div>

                <Post message={postData[0].post} like={postData[0].likesCount}/>
                <Post message={postData[1].post} like={postData[1].likesCount}/>
                <Post message={postData[2].post} like={postData[2].likesCount}/>

            </div>
        </div>
    )
}


export default MyPosts;