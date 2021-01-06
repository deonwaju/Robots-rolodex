import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container'>
        <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set3&size=180x180`}/>
        <h3>{props.robot.name}</h3>
        <p>{props.robot.email}</p>
    </div>
)