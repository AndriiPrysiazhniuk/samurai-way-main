import React from "react";
import classes from "./ProfileInfo.module.css";

export type PropsProfileInfoType = {
    imageSrc: string
}

export const ProfileInfo:React.FC<PropsProfileInfoType> = (props: PropsProfileInfoType) => {
    const {imageSrc} = props
    return (
        <div>
            <img
                src={imageSrc}
                alt="main_picture"/>
        </div>
    )
}