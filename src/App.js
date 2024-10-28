import React from 'react';
import Slider from './Slider';
import Gora from "./gora.jsx";
import FilmList from "./filmList.jsx";
import './App.css';

const App = () => {
    return (
        <div>
            <Gora />
            <h1 id="sliderHeader">Lublin Plaza</h1>
            <Slider />
            <FilmList />
        </div>
    );
};

export default App;