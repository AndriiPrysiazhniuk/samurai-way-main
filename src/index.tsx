import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, PropsDataStateType, state, subsdribe, updatePostText} from "./redux/state/state";
import {BrowserRouter} from "react-router-dom";
import {App} from './components/App/App';

 const rerenderEntireTree = (state:PropsDataStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updatePostTest={updatePostText} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

 rerenderEntireTree(state)
subsdribe(rerenderEntireTree)