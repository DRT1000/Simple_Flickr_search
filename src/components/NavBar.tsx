import React from 'react';
import style from './navBar.module.scss'

const NavBar = () => {
    return (
        <div className={style.nav}>
            <div className={style.search}> <img src='../assets/images/search--v2.png'/></div>
            <div className={style.bookmarks}> </div>
        </div>
    );
};


export default NavBar;