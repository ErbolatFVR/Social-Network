import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={css.dialog + ' ' + css.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={css.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <DialogItem name="Erbolat" id="01"/>
                <DialogItem name="Yerasyl" id="02"/>
                <DialogItem name="Akobta"  id="03"/>
                <DialogItem name="Tannur"  id="04"/>
            </div>
            <div className={css.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="I am fine" />
                <Message message="Let's go play" />
            </div>
        </div>
    )
}


export default Dialogs;