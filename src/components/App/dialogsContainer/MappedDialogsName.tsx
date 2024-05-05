import {DialogItem} from "./Dialogs/DialogItem/DialogItem";
import React from "react";
import {DialogsDataPageType} from "../../../redux/state/store";

export const MappedDialogsName = ({dialogs}:DialogsDataPageType) => {
    return dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })
}