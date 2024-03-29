import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Error404} from "../ErrorPage/Error404";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {News} from "./News/News";
import MyProducts from "./MyProducts/MyProducts";
import {PropsDataStateType, updatePostTest} from "../../redux/state/state";

type PropsStateType = {
    state: PropsDataStateType
    addPost: (postMessage: string) => void
    updatePostTest: (newPostMessage: string) => void
}

export const App = (state: PropsStateType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogs={state.state.dialogsPage}/>}/>

                <Route path='/profile'
                       render={() => <Profile
                           newPostValue={state.state.profilePage.newPostValue}
                           profile={state.state.profilePage} updatePostTest={updatePostTest} addPost={state.addPost}/>}/>
                <Route path='/my-products'
                       render={() => <MyProducts
                           products={state.state.products}/>}/>
            </div>
        </div>
    );
}
