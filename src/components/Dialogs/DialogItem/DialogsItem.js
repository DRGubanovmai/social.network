import React from "react";
import dialogs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <div>
            <div>
            <NavLink to={path}
                     className={navData => navData.isActive ? dialogs.active : dialogs.item}>{props.name}</NavLink>
            </div>
            </div>);
}

export default DialogItem;