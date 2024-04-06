import React, {createRef, RefObject} from 'react';
import classes from './Dialogs.module.css'
import {
    ActionsType,
    addMessageAC,
    addPostAC,
    DialogsDataPageType,
    updateMessageTextAC,
    updatePostTextAC
} from "../../../redux/state/state";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {TextField} from "../../TextField/TextField";

type DialogsPropsType = {
    dialogs: DialogsDataPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, dispatch}) => {
    const newMessage: RefObject<any> = createRef()
    const addNewMessageHandler = () => {
        dispatch(addMessageAC())
    }
    const onChangeHandler = () => {
        const message = newMessage.current.value
        dispatch(updateMessageTextAC(message))
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
                    <textarea onChange={onChangeHandler} ref={newMessage} value={dialogs.dialogsMessage}/>
                    <button onClick={addNewMessageHandler}>add Message</button>
                </div>
                {/*<MappedMessages dialogsMessagesData={dialogsMessagesData}/>*/}
            </div>
        </div>
    );
};

