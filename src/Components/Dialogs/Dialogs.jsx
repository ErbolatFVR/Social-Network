import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.dialog + ' ' + css.active}>
                    <NavLink to="/dialogs/1">Erbolat</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/2">Yerasyl</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/3">Akbota</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/4">Yerbol</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/5">Akerke</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className="message">hi,world</div>
                <div className="message">fffffffffff</div>
                <div className="message">oifjsin</div>
            </div>
        </div>
    )
}


export default Dialogs;