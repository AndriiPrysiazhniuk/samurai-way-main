import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, state, updatePostTest} from "./redux/state/state";
import {BrowserRouter} from "react-router-dom";
import {App} from './components/App/App';

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updatePostTest={updatePostTest} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}