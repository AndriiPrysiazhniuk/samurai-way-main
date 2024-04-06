import React, {ChangeEvent, createRef, RefObject} from 'react';
import classes from './Dialogs.module.css'
import {
    ActionsType,
    addMessageAC,
    addPostAC,
    DialogsDataPageType, GlobalStoreType,
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

    const addNewMessageHandler = () => {
        dispatch(addMessageAC())
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {

        dispatch(updateMessageTextAC(e.target.value))
        console.log(e.target.value)
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

