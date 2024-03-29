import {NavLink} from "react-router-dom";
import React from "react";
import classes from "../../News/News.module.css";

export type DialogNamesType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogNamesType> = ({name, id}) => {

    const path = '/dialogs/' + id
    return <div>
        <NavLink to={path}
                 className={classes.item + ' ' + classes.active}>{name}</NavLink>
    </div>
}
