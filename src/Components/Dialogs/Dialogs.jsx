import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    );
}

const Mess = (props) => {
    return (
        <div className={classes.message}>{props.sms}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Sasha" id="1" />
                <DialogItem name="Vitya" id="2" />
                <DialogItem name="Katya" id="3" />
                <DialogItem name="Sveta" id="4" />
                <DialogItem name="Oleg" id="5" />
            </div>

            <div className={classes.messages}>
                <Mess sms="Hi" />
                <Mess sms="Hello" />
                <Mess sms="Privet" />
                <Mess sms="How are you ?" />
                <Mess sms="Kak dela ?" />
            </div>
        </div>
    );
}



export default Dialogs;