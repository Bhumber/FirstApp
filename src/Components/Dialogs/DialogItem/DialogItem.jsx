import React from "react";
import classes from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;