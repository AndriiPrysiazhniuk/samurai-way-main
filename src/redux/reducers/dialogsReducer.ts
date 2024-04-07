import {ActionsType, DialogsDataPageType} from "../state/state";
import {DialogMessagesType} from "../../components/App/Dialogs/DialogMessage/DialogMessage";

export const dialogsReducer = (state: DialogsDataPageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const myMessage = {
                id: 6,
                message: state.dialogsMessage
            } as DialogMessagesType

            state.messages.push(myMessage)
            state.dialogsMessage = ''
 return state
        case 'UPDATE-MESSAGE-TEXT':
            state.dialogsMessage = action.newMessageText;
            return state
        default:
            return state
    }
}