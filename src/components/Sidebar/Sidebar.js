import React from "react";
import sidebar from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (<nav className={sidebar.sidebar}>
        <div>
            <NavLink to={'/profile'} className={navData => navData.isActive ? sidebar.active : sidebar.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to={'/dialogs'} className={navData => navData.isActive ? sidebar.active : sidebar.item}>Messages</NavLink>
        </div>
        <div>
            <NavLink to={'/users'} className={navData => navData.isActive ? sidebar.active : sidebar.item}>Users</NavLink>
        </div>
        <div>
            <NavLink exa to={'/news'} className={navData => navData.isActive ? sidebar.active : sidebar.item}>News</NavLink>
        </div>
        <div>
            <NavLink to={'/music'} className={navData => navData.isActive ? sidebar.active : sidebar.item}>Music</NavLink>
        </div>
        <div>
            <NavLink to={'/settings'}className={navData => navData.isActive ? sidebar.active : sidebar.item}>Settings</NavLink>
        </div>
    </nav>);
}

export default Sidebar;