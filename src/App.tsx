import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/mainContent/Profile/Profile";
import {Dialogs} from "./components/mainContent/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/mainContent/News/News";
import {Music} from "./components/mainContent/Music/Music";
import {Settings} from "./components/mainContent/Settings/Settings";
import {state} from "./redux/State";
import {Error404Window} from "./components/Error/ErrorWindow";

type navbarDataType = {
    srcTo: string
    menuItemTitle: string
}
type DialogItemDataType = {
    id: string
    name: string
    src: string
}
type HeaderDataType = {
    imageSrc: string
    logoText: string
}
export type MainPropsType = {
    headerData: HeaderDataType
    DialogItemData: DialogItemDataType[]
    navbarData: navbarDataType[]
}
type StatePropsType = {
    state: MainPropsType
}
const App = (props: StatePropsType) => {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header headerData={props.state.headerData}/>
                <Navbar navbarData={props.state.navbarData}/>
                <div className="appWrapperContent">
                    <Route path={'/Profile'} render={() => <Profile title={'profile'}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs MessageState={state.messagesState}
                                                                    DialogItemState={state.DialogItemData}/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
