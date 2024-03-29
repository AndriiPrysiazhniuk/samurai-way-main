import React from 'react';
import classes from './Dialogs.module.css'
import {DialogsDataPageType} from "../../../redux/state/state";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";

type DialogsPropsType = {
    dialogs: DialogsDataPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {

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
                {/*<MappedMessages dialogsMessagesData={dialogsMessagesData}/>*/}
            </div>
        </div>
    );
};

