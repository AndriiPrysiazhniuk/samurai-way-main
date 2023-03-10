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


const App = () => {
    return (
        <BrowserRouter>

            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Route component={Profile} path={'/Profile'}/>
                    <Route component={Dialogs} path={'/Dialogs'}/>
                    <Route component={News} path={'/News'}/>
                    <Route component={Music} path={'/Music'}/>
                    <Route component={Settings} path={'/Settings'}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
