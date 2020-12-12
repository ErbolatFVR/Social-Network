import './index.css';
import App      from './App';
import React    from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}    from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

//Перерисует страницу
rerenderEntireTree (store.getState());

store.subscribe (rerenderEntireTree);
serviceWorker.unregister();
