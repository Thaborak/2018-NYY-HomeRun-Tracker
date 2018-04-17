/* global $ */
// eslint-disable-next-line
import React from 'react';

function getDataFromApi(callback) {
    let url = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?playerstats=HR&team=nyy&sort=stats.HR.D&limit=4';
    $.ajax({
        type: 'GET',
        url,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization': 'Basic ' + btoa('thaborak' + ':' + 'petproject')
        },
        data: $.parseJSON,
        success: function (data) {
            console.log(data);
        }
    });
}


function getPictureFromApi(callback) {
    let url = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/active_players.json?team=nyy';
    $.ajax({
        type: 'GET',
        url,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization': 'Basic ' + btoa('thaborak' + ':' + 'petproject')
        },
        data: $.parseJSON,
        success: function (picture) {
            console.log(picture);
        }
    });
}

export default function displaySearchData(props) {
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
    );
}
