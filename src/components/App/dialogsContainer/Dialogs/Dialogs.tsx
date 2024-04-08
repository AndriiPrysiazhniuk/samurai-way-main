import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {
    DialogsDataPageType,
} from "../../../../redux/state/store";
import {DialogItem} from "../Dialogs/DialogItem/DialogItem";
import {DialogMessage} from "../Dialogs/DialogMessage/DialogMessage";

export type DialogsPropsType = {
    dialogs: DialogsDataPageType
    addMessage: () => void
    updateMessageText: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, updateMessageText, addMessage}) => {

    const addNewMessageHandler = () => {
        addMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateMessageText(e.target.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.dialogs.map(el => {
                    return <DialogItem name={el.name} id={el.id}/>
                })}
                {/*<MappedDialogsName dialogsNamesData={dialogsNamesData}/>*/}
            </div>
            <div className={classes.messages}>
                {dialogs.messages.map(el => {
                    return <DialogMessage id={el.id} message={el.message}/>
                })}
                <div>
                    <textarea
                        value={dialogs.dialogsMessage}
                        onChange={onChangeHandler}
                    />
                    <button onClick={addNewMessageHandler}>add Message</button>
                </div>
                {/*<MappedMessages dialogsMessagesData={dialogsMessagesData}/>*/}
            </div>
        </div>
    );
};

