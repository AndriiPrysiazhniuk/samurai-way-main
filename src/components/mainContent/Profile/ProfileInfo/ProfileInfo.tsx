import React from 'react';
import classes from "../Profile.module.css";

type SrcImgType = {
    srcBackImg: string
    srcAvaImg: string
}
type ProfileInfoType = {
    state: SrcImgType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <img className={classes.backImage}
                 src={props.state.srcBackImg}
                 alt=""/>
            <img className={classes.avaImage}
                 src={props.state.srcAvaImg}
                 alt=""/>
        </div>
    );
};
