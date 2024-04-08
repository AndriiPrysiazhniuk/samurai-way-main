import React from "react";
import {AppRootStateType} from "../redux/state/redux-store";
import {GlobalStoreType} from "../redux/state/store";

export const StoreContext = React.createContext(null)

export const Provider: React.FC<any> = ({store, children}) => {
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}

