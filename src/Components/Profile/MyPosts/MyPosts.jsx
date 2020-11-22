import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

    let PostsElements = props.posts.map( p => <Post message={p.post} like={p.likesCount} />);

    return (

        <div className={css.content}>
            <div>
                <textarea  className={css.textarea} ></textarea>
            </div>

            <div>
                <button >Add Post</button>
            </div>
            
            <div>
                {PostsElements}
            </div>
        </div>
    )
}


export default MyPosts;