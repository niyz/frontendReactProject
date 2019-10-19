import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewList from './containers/ReviewList/ReviewList';
import TopRestaurants from "./containers/TopRestaurants/TopRestaurants";
import Navbar from './containers/Header/Navbar';
import Register from './containers/Register/Register';

//Rename header -> ReviewContainer

class App extends React.Component {
    render() {
        return (
            <div className="App container">
                <Navbar></Navbar>
                <ReviewList></ReviewList>
                <TopRestaurants></TopRestaurants>
                <Register></Register>
            </div>

        );
    }
}

export default App;