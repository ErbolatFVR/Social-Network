import React from 'react';
import css from './Navbar.module.css';
const Navbar = () => {
    return <nav className={css.nav}>
        <div>
            <a className={css.item}>Profile</a>
        </div>
        <div>
        <a className={`${css.item} ${css.active}`}>Messages</a>
        </div>
        <div>
            <a className={css.item}>News</a>
        </div>
        <div>
            <a className={css.item}>Music</a>
        </div>
    </nav>
}



export default Navbar;