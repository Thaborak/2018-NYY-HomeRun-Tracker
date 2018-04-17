// eslint-disable-next-line
import React from 'react';

function merge(props) {
    props.data.cumulativeplayerstats.playerstatsentry.forEach(stats => {
        const found = props.picture.activeplayers.playerentry.find(pic => {
            return pic.player.ID === stats.player.ID;
        });
        console.log(found);
        stats.player.pic = found;
    });
    console.log(props.data.cumulativeplayerstats.playerstatsentry);
    const output = (props.data.cumulativeplayerstats.playerstatsentry);
    return (
        output
    )
}

export default merge;