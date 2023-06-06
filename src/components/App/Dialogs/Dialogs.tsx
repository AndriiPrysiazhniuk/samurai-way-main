import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {message} from "antd";


export const Dialogs = () => {

    const dialogsNamesData = [
        {id: 1, name: 'Andrii'},
        {id: 2, name: 'Vitalii'},
        {id: 3, name: 'Sasha'}
    ]
    const dialogsMessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?!'},
        {id: 3, message: 'Yo!'}
    ]

    const mappedDialogsName = dialogsNamesData.map(el =>
        <DialogItem key={el.id} id={el.id} name={el.name}/>
    )
    const mappedMessages = dialogsMessagesData.map(el =>
        <DialogMessage key={el.id} id={el.id} message={el.message}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {mappedDialogsName}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
            </div>
        </div>
    );
};

