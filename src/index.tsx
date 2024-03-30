import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store, PropsDataStateType} from "./redux/state/state";
import {BrowserRouter} from "react-router-dom";
import {App} from './components/App/App';

const rerenderEntireTree = (state: PropsDataStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} updatePostText={store.updatePostText} addPost={store.addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store._state)
store.subsdribe(rerenderEntireTree)