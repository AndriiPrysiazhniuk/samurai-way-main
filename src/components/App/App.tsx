import React, {useState} from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile, {ProfileDateType} from './Profile/Profile';
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {Error404} from "../ErrorPage/Error404";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {News} from "./News/News";
import MyProducts from "./MyProducts/MyProducts";
import {ProductCardType} from "./MyProducts/Product/Product";

type StateType = {
    state: StateProfileDateType
}
export type StateProfileDateType = {
    profileDate: ProfileDateType
    products: Array<ProductCardType>
}
const App = ({state}: StateType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/profile'} render={() => <Profile postData={state.profileDate.postData}
                                                                    title={state.profileDate.title}
                                                                    profileInfoDate={state.profileDate.profileInfoDate}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/my-products'} render={() => <MyProducts products={state.products}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    {/*<Route path={'/*'} render={Error404}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
