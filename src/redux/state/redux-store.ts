import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducers/profileReducer";
import {sidebarReducer} from "../reducers/sidebarReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";
import {productsReducer} from "../reducers/productsReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    products: productsReducer
})


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>