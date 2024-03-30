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
import {PropsDataStateType, store} from "../../redux/state/state";

type PropsStateType = {
    state: PropsDataStateType
    addPost: (postMessage: string) => void
    updatePostText: (newPostMessage: string) => void
}

export const App = (state: PropsStateType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogs={store._state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           newPostValue={store._state.profilePage.newPostText}
                           profile={store._state.profilePage} updatePostText={store.updatePostText.bind(store)}
                           addPost={store.addPost.bind(store)}/>}/>
                <Route path='/my-products'
                       render={() => <MyProducts
                           products={store._state.products}/>}/>
            </div>
        </div>
    );
}
