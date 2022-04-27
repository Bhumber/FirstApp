import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;

//     return (
//         <div className={classes.dialog}>
//             <NavLink to={path} >{props.name}</NavLink>
//         </div>
//     );
// }

// const Mess = (props) => {
//     return (
//         <div className={classes.message}>{props.sms}</div>
//     );
// }

const Dialogs = (props) => {
    let dialogsData = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Vitya'},
        {id: '3', name: 'Katya'},
        {id: '4', name: 'Sveta'},
        {id: '5', name: 'Oleg'},
    ];

    let dialogElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );

    let messData = [
        {id: '1', sms: "Hi"},
        {id: '2', sms: "Hello"},
        {id: '3', sms: "Privet"},
        {id: '4', sms: "How are you ?"},
        {id: '5', sms: "Kak dela ?"},
    ];

    let messElements = messData.map(m => <Message sms={m.sms} />,)

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