import React, {RefObject} from 'react';

type PropsInputType = {
    value: RefObject<any>
}
export const TextField = ({value}: PropsInputType) => {
    return (
        <input ref={value}/>
    );
};

