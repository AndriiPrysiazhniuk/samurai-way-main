import React from 'react';
type PropsType={
    title:string
    callback:()=>void
}
export const BigBossButton = (props:PropsType) => {
    const onClickButtonHandler=()=>{
        props.callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.title }</button>
    );
};

