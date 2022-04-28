import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import dialogsData from "./Data/DialogsData/DialogsData";
// import messData from "./Data/MessagesData/MessagesData";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

    let messElements = props.messages.map(m => <Message sms={m.sms} />,)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements} 
            </div>

            <div className={classes.messages}>
                {messElements}
            </div>
        </div>
    );
}



export default Dialogs;