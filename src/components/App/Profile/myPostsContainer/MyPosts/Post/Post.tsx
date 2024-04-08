import React from 'react';
import {PostData} from "../../../../../../redux/state/store";

export const Post = (props: PostData) => {
    return (
        <div>
            <img
                style={{width: '50px', height: '50px'}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTd0qKjDC98oCC_NKnxNk2b8zYCM6UKrcSpw&usqp=CAU' alt={''}/>
         <div>
             {props.message}
         </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};
