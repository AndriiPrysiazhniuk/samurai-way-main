import {NavLink} from "react-router-dom";
import classes from './DialogItem.module.css';
import React from "react";

type PropsType = {
    name: string
    id: number
}
export const DialogItem: React.FC<PropsType> = ({name, id}: PropsType) => {

    const path = '/dialogs/' + id
    return <NavLink to={path}
                    className={classes.item + ' ' + classes.active}>{name}</NavLink>
}
