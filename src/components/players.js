import React from 'react';
import Picture from './picture';
import Card from './card';



export default function Players(props) {
        return (
            <div id="box1">
                <Picture player={props.output} />
                <Card player={props.output}/>
            </div>
        )
}

Card.defaultProps = {
    text: ''
}

