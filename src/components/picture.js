import React from 'react';
import pic from './api';

export default function Picture(props) {
    return (
        <div>
            <img src="{props.player.player.pic.player.officialImageSrc}" alt="thumbnail" />
        </div>
    );
};



