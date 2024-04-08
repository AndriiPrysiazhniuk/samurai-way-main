import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import {Route} from "react-router-dom";
import MyProducts from "./MyProducts/MyProducts";
import {ActionsType} from "../../redux/state/store";
import {AppRootStateType} from "./../../redux/state/redux-store";
import {DialogsContainer} from "./dialogsContainer/DialogsContainer";

type PropsStateType = {
    state: AppRootStateType
    dispatch: (action: ActionsType) => void
}
export const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/my-products'
                       render={() => <MyProducts/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>

            </div>
        </div>
    );
}
