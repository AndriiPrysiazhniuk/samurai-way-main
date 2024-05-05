import React, {ReactNode} from 'react';
import {
    ActionsType,
    addMessageAC,
    DialogsDataPageType, GlobalStoreType,
    updateMessageTextAC, updatePostTextAC,
} from "../../../redux/state/store";
import {Dialogs, DialogsPropsType} from "./Dialogs/Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/state/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogs,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessageText: (message: string) => {
            dispatch(updateMessageTextAC(message))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

