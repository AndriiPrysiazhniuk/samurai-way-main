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

// type DialogsContainerPropsType = {
//     dialogs: DialogsDataPageType
//     dispatch: (action: ActionsType) => void
// }
//
// export const DialogsContainer: React.FC<any> = () => {
//
//     return <StoreContext.Consumer>
//         {(store: any) => {
//             const addNewMessageHandler = () => {
//                 store.dispatch(addMessageAC())
//             }
//             const updateMessageTextHandler = (message: string) => {
//                 store.dispatch(updateMessageTextAC(message))
//             }
//
//             return <Dialogs updateMessageText={updateMessageTextHandler}
//                             addMessage={addNewMessageHandler}
//                             dialogs={store.getState().dialogs}/>
//         }}
//     </StoreContext.Consumer>
// };

const mapStateToProps = (state: DialogsPropsType) => {
    return {
        dialogs: state.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessageText: (message: string) => {
            dispatch(updatePostTextAC(message))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

