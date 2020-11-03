import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post'
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const MyPosts = () => {

    let postData = [
        {id:1, likesCount:12, post:'Hi, How are you?'},
        {id:2, likesCount:26, post:'It\'s my first post'},
        {id:3, likesCount:28, post:'Look at this'},
    ]

    let Posts = postData.map( p => <Post message={p.post} like={p.likesCount} />);

    return (

        <div className={css.content}>
            <div>
                <textarea  className={css.textarea} cols="80" rows="5"></textarea>
            </div>
            <div>
                <button >Add Post</button>
            </div>
            
            <div>

                {Posts}

            </div>
        </div>
    )
}


export default MyPosts;