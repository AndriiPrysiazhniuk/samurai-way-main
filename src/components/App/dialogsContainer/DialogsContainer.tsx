import React, {ReactNode} from 'react';
import {
    ActionsType,
    addMessageAC,
    DialogsDataPageType, GlobalStoreType,
    updateMessageTextAC,
} from "../../../redux/state/store";
import {Dialogs} from "./Dialogs/Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {
    dialogs: DialogsDataPageType
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer: React.FC<any> = () => {

    return <StoreContext.Consumer>
        {(store:any) => {
            const addNewMessageHandler = () => {
                store.dispatch(addMessageAC())
            }
            const updateMessageTextHandler = (message: string) => {
                store.dispatch(updateMessageTextAC(message))
            }

            return <Dialogs updateMessageText={updateMessageTextHandler}
                            addMessage={addNewMessageHandler}
                            dialogs={store.getState().dialogs}/>
        }}
    </StoreContext.Consumer>
};

