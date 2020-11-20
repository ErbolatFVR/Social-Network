import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {


    let DialogsElements = props.dialogs.map( d => <DialogItem name={d.name} surname={d.surname} id={d.id} />);



    let MessagesElements = props.messageData.map(m => <Message message={m.message} />);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={css.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}


export default Dialogs;