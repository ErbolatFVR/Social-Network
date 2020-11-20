import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, likesCount:12, post:'Hi, How are you?'},
    {id:2, likesCount:26, post:'It\'s my first post'},
    {id:3, likesCount:28, post:'Look at this'},
]
let dialogs = [
    {id:1, name:'Erbolat', surname:'Erkinbek'},
    {id:2, name:'Yersyl', surname:'Kerimbek'},
    {id:3, name:'Akerke', surname:'Mukhamadieva'},
    {id:4, name:'Yebol', surname:'Satybaldyn'},
    {id:5, name:'Agzambek', surname:'Kairat'},
    {id:6, name:'Axmet', surname:'Ermekov'}
]
let messageData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'I am fine'},
    {id:4, message:'Let\'s go play'},
    {id:5, message:'Blablaalabalabl'}
]

ReactDOM.render(


  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
