import React from "react";


export const ProfileInfo = () => {

    return <div>
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
    </div>
}