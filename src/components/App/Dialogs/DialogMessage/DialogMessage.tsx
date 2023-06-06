import classes from "./DialogMessage.module.css";
import React from "react";

type PropsType = {
    id: number
    message: string
}

export const DialogMessage: React.FC<PropsType> = (props: PropsType) => {
    const {id, message} = props

    return (
        <div className={classes.dialog}>{message}</div>
    )
}