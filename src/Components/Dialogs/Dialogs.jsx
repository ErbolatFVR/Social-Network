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
    let dialogsData = [
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
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>

                <DialogItem name={dialogsData[0].name} surname={dialogsData[0].surname} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} surname={dialogsData[1].surname} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} surname={dialogsData[2].surname} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} surname={dialogsData[3].surname} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} surname={dialogsData[4].surname} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} surname={dialogsData[5].surname} id={dialogsData[5].id}/>

            </div>
            <div className={css.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
                <Message message={messageData[4].message} />
            </div>
        </div>
    )
}


export default Dialogs;