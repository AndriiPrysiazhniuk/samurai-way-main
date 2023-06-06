import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {state} from "./redux/state/state";

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);