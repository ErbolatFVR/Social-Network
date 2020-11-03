import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={css.dialog + ' ' + css.active}>
        <NavLink to={path}>{props.name} {props.surname}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={css.message}>{props.message}</div>
}


const Dialogs = () => {

    let dialogs = [
        {id:1, name:'Erbolat', surname:'Erkinbek'},
        {id:2, name:'Yersyl', surname:'Kerimbek'},
        {id:3, name:'Akerke', surname:'Mukhamadieva'},
        {id:4, name:'Yebol', surname:'Satybaldyn'},
        {id:5, name:'Agzambek', surname:'Kairat'},
        {id:6, name:'Axmet', surname:'Ermekov'}
    ]

    let DialogsElements = dialogs.map( d => <DialogItem name={d.name} surname={d.surname} id={d.id} />);

    let messageData = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'I am fine'},
        {id:4, message:'Let\'s go play'},
        {id:5, message:'Blablaalabalabl'}
    ]

    let MessagesElements = messageData.map(m => <Message message={m.message} />);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                { DialogsElements }
            </div>
            <div className={css.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}


export default Dialogs;