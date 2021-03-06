import React from 'react';
import css   from './Post.module.css'

const Post = (props) => {
  return (
    <div className={css.content}>
      
      <div className={css.item}>
        <img src="https://sun9-69.userapi.com/impf/c824201/v824201969/17341f/IfCwbiGRL7c.jpg?size=200x0&quality=90&crop=0,0,500,588&sign=9b4d43be2be378401d5bec41a9c5d5b3&ava=1" alt="img"></img>
        <div className={css.message} >
          {props.message}
        </div>
        <span className={css.like}>Like {props.like}</span>
      </div>
    </div>

  )
}


export default Post;