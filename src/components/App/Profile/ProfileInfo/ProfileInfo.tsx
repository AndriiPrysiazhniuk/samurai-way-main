import React from "react";


export const ProfileInfo: React.FC<any> = (props) => {

    return (
        <div>
            <div>
                <img
                    src={props.imageSrc}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}