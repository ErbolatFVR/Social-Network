import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let PostsElements = props.posts.map
        ( p => <Post message={p.post} like={p.likesCount} />);

    let textArea = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }
    let onPostChange = () => {
        let text = textArea.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={css.content}>
            <div>
                <textarea onChange={onPostChange} ref={textArea} value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    )
}


export default MyPosts;