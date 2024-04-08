import React from "react";
import {StoreContext} from "../../../StoreContext";


export const ProfileInfo = () => {

    return <StoreContext.Consumer>
        {
            (store: any) => {
                const state = store.getState();
                console.log('state', state)
                return <div>
                    <div>
                        <img
                            src={state.profile.imageSrc}/>
                    </div>
                    <div>
                        ava + description
                    </div>
                </div>
            }
        }
    </StoreContext.Consumer>
}