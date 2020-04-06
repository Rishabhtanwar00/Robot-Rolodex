import React from 'react';

import './card.styles.css';

export const Card= (props) => (
     <div className="card-container">
        <img alt="robot" src={`https://robohash.org/${props.robot.id+5}?set=set2`}></img>
        <h2>{props.robot.name}</h2>
        <p>Email:<br/> {props.robot.email}</p>
     </div>
    
)          