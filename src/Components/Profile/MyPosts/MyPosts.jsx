import React from 'react'
import Post  from './Post/Post'
import css   from './MyPosts.module.css'


const MyPosts = (props) => {
    //Берет с хранилища данных и составляет посты
    let PostsElements = props.posts.map
        ( p => <Post message={p.post} like={p.likesCount} />);

    //textarea обьявлена как переменная
    let textArea = React.createRef();

    //вызывает функцию для добавления поста в профиль
    let addPost = () => {

        //props.addPost();
        props.dispatch({type: 'ADD-POST'})
    }

    //Данные в Textarea отправляется в State чтобы обновить данные
    let onPostChange = () => {
        let currentText = textArea.current.value;
        //props.updateNewPostText(currentText);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: currentText};
        props.dispatch(action)
        }
    //Возвращает посты
    return (
        <div className={ css.content }>
            <div> <textarea onChange={ onPostChange }
                          ref     = { textArea}
                          value   = { props.newPostText } /></div>
            <div> <button onClick = { addPost }> Add Post </button></div>
            <div> { PostsElements } </div>
        </div>
    )
}

export default MyPosts;