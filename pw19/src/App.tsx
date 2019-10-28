import React, { useState, useEffect } from 'react';
import './App.css';
import Dice from './dice/Dice';

const App = () => {
    const [rand, setRand] = useState(1);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setRand(Math.floor(6*Math.random())+1);
            setAngle(angle => angle == 359 ? 0 : angle+1);
        },100);
    },[]);

    console.log(16, angle);

    return (
        <div className = "App">
        just testing11...
        <Dice angle = {angle} n = {rand} />
        </div>
    );
}

export default App;
