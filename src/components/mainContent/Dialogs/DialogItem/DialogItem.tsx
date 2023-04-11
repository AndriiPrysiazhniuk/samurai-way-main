import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type PropsType = {
    name: string
    src: string
    id: string
}

export const DialogItem = (props: PropsType) => {
    return (
        <li  className={classes.dialog + ' ' + classes.active}>
            <NavLink to={props.src + props.id}>{props.name}</NavLink>
        </li>
    )
}