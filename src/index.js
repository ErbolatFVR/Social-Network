import './index.css';
import App      from './App';
import React    from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}    from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import {addPost, updateNewPostText} from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> //Отслеживает URL чтобы отрисовать нужную компоненту
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
//Перерисует страницу
rerenderEntireTree(state);
subscribe(rerenderEntireTree)
serviceWorker.unregister();
