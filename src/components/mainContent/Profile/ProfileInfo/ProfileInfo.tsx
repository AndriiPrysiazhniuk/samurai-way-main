import React from 'react';
import classes from "../Profile.module.css";

export const ProfileInfo = (props:any) => {
    return (
        <div>
            <img className={classes.backImage}
                 src="https://www.treehugger.com/thmb/MICZ1IMA4HP5-LKwf6dTE9uCZ4U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1247807601-14960e5e6ba04ce6b4d8d211b5d74dd4.jpg"
                 alt=""/>
            <div>
                <img className={classes.avaImage}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3FEmPBlpiCLAA382CDq1YNmA6gpICLmcWQ&usqp=CAU"
                     alt=""/>
            </div>
        </div>
    );
};
