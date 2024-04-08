import {ActionsType, DialogsDataPageType} from "../state/store";
import {DialogMessagesType} from "../../components/App/dialogsContainer/Dialogs/DialogMessage/DialogMessage";


const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogsMessage: 'Send new message'
} as DialogsDataPageType

export const dialogsReducer = (state: DialogsDataPageType = initialState, action: ActionsType) => {
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