import React from "react";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Bookmarks from "./components/Bookmarks";
import style from "./App.module.scss"

export const App = () => {
    return <div className={style.main}>
        <NavBar/>
        <Search/>
        <Bookmarks/>
        </div>
}