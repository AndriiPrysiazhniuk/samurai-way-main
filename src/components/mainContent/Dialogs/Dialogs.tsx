import React, {useState} from 'react';
import classes from "./Dialogs.module.css";
import {TextField} from "../../../universalComponents/TextField/TextField";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {v1} from "uuid";
import {MainPropsType} from "../../../App";
import {BigBossButton} from "../../../universalComponents/BigBossButton/BigBossButton";

type DialogItemDataType = {
    id: string
    name: string
    src: string
}
type MessageStateType = {
    id: string,
    sms: string
}
type DialogStateType = {
    MessageState: MessageStateType[]
    DialogItemState:DialogItemDataType[]
}


export const Dialogs = (props: DialogStateType) => {
    const [filterValue, setFilterValue] = useState('')
    const [messages, setMessages] = useState(props.MessageState)
    const addMessages = () => {
        let newMessage = {id: v1(), sms: filterValue}
        setMessages([...messages, newMessage])
    }
    const dataItemMapped = props.DialogItemState.map((el) => {
        return (
            <DialogItem key={el.id} id={el.id} src={el.src} name={el.name}/>
        )
    })
    const messageItemsMapped=messages.map(el => {
            return <Message key={el.id} message={el.sms}/>
        })

    return (
        <div className={classes.dialogs}>
            <h3 className={classes.dialogsTitle}>Dialogs</h3>
            <div className={classes.dialogsSection}>
                <ul className={classes.dialogsItems}>
                    {dataItemMapped}
                </ul>
                <div className={classes.messageSection}>
                    {messageItemsMapped}

                    <div className={classes.sendMessage}>
                        <TextField filterValue={filterValue} callback={setFilterValue}/>
                        <BigBossButton title={'send message'} callback={addMessages}/>
                    </div>
                </div>
            </div>
        </div>

    );
};
