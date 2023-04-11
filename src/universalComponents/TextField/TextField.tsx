import React, {ChangeEvent, useState} from 'react';

type PropsTextFieldType = {
    filterValue: string
    callback:(filterValue:string)=>void
}


export const TextField = (props: PropsTextFieldType) => {

    // const addMessage = () => {
    //     props.callback(filterValue)
    //     setFilterValue('')
    // }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (

        <div>
            <input value={props.filterValue} onChange={onChangeHandler}/>
        </div>
    );
};

