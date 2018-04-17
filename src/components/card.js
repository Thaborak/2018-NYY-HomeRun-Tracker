import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <h2 class="subtitle">{props.FirstName} {props.LastName}</h2>
            <p>{props.Homeruns}</p>
        </div> 
    );
};
