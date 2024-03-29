import classes from "./DialogMessage.module.css";
import React from "react";

export type DialogMessagesType = {
    id: number
    message: string
}

export const DialogMessage: React.FC<DialogMessagesType> = (props) => {
    const {id, message} = props

    return (
        <div className={classes.dialog}>{message}</div>
    )
}