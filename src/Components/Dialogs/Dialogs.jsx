import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let DialogsElements = props.state.dialogs
        .map( d => <DialogItem name={d.name} surname={d.surname} id={d.id} />);

    let MessagesElements = props.state.messages
        .map( m => <Message message={m.message} />);

    let messageArea = React.createRef();

    let sendMessage = () => {
        let text = messageArea.current.value;
        alert(text)
    }
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={css.messages}>
                {MessagesElements}
                <div>
                    <textarea  ref={messageArea} ></textarea>
                    <button onClick={sendMessage} >Send message</button>
                </div>
            </div>

        </div>
    )
}


export default Dialogs;