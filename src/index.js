import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import ShowRestaurant from "./pages/Restaurante/ShowRestaurant";

ReactDOM.render(
    <Router>
        <Route path="/restaurant/:id?" exact component={ShowRestaurant}/>
        <Route path="/" exact component={App}/>
    </Router>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
