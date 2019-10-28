import React from "react";
import "./Dice.css";
import { zeros } from "../utils";

interface IProps {
    angle: number,
    n: number
}

const Dice = (props: IProps) => {

    const { n, angle } = props;

    const dot = (
        <div className = "dice-dot-1">

        </div>
    );

    const dots = zeros(n).map(() => 
        <div className = {`dice-dot-${n}`}></div>
    );
    
    return (
        <div className = "dice-app" style = {{transform: `rotate(${angle}deg)`}}>
            {dots}
        </div>
    );
}

export default Dice;