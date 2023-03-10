import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {TextField} from "../../TextField/TextField";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    const DialogItemData = [
        {
            id: 1,
            name: 'Andrii',
            src: '/Dialogs/Andrii-id'
        },
        {
            id: 2,
            name: 'Vitalii',
            src: '/Dialogs/Vitalii-id'
        },
        {
            id: 3,
            name: 'Sasha',
            src: '/Dialogs/Sasha-id'
        },
        {
            id: 4,
            name: 'Serhii',
            src: '/Dialogs/Serhii-id'
        },
        {
            id: 5,
            name: 'Liuda',
            src: '/Dialogs/Liuda-id'
        },
        {
            id: 6,
            name: 'Natasha',
            src: '/Dialogs/Natasha-id'
        },
        {
            id: 7,
            name: 'Arina',
            src: '/Dialogs/Arina-id'
        },
    ]

    const messages = [
        {
            id: 1,
            sms: 'hello, buddy'
        },
        {
            id: 2,
            sms: 'hello, how is your education at incubator'
        },
        {
            id: 3,
            sms: 'Yo! I am good'
        },
    ]

    const dataItem = DialogItemData.map(el => {
        let path
        return (
            <DialogItem id={el.id} src={el.src} name={el.name}/>
        )
    })
    return (
        <div className={classes.dialogs}>
            <h3>Dialogs</h3>
            <div className={classes.dialogsSection}>
                <ul className={classes.dialogsItems}>
                    {dataItem}
                </ul>

                <div className={classes.messageSection}>
                    {messages.map(el => {
                        return <Message key={el.id} message={el.sms}/>
                    })}

                    <div className={classes.sendMessage}><TextField/></div>
                </div>
            </div>
        </div>

    );
};
