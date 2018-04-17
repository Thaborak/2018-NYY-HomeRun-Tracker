/* global $ */
// eslint-disable-next-line
import React, { Component } from 'react';
import { API_DATA_URL } from '../config';
import { API_PIC_URL } from '../config';
import Display from './display';
import Card from './card';
import Output from './api';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: {},
            error: null,
            loading: false,
            output: ""
        };
    }

    componentDidMount() {
        this.loadStats();
    }

    loadStats() {
        const myInit = {
            method: 'GET',
            body: JSON.stringify(),
            dataType: 'json',
            async: false,
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Basic ' + btoa('thaborak' + ':' + 'petproject'),
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'

            },
            data: $.parseJSON,
        }
        function getPlayerData(data) {
            return fetch(`${API_PIC_URL}`, myInit).then(response => response.json())
        }

        function getPic(data) {
            return fetch(`${API_DATA_URL}`, myInit).then(response => response.json())
        }
        function merge(data, picture) {
            data.cumulativeplayerstats.playerstatsentry.forEach(stats => {
                const found = picture.activeplayers.playerentry.find(pic => {
                    return pic.player.ID === stats.player.ID;
                });
                console.log(found);
                stats.player.pic = found;
            });
            console.log(data.cumulativeplayerstats.playerstatsentry);
            const output = (data.cumulativeplayerstats.playerstatsentry);
            return (
            <Output />
                )
        }
    }
    render() {
        let body;
        if (this.state.error) {
            body = (
                <div className="message message-error">{this.state.error}</div>
            );
        } else if (this.state.loading) {
            body = (
                <div className="message message-default">Loading Stats...</div>
            );
        } else {
            body = (
                <Display />
            );
        }

        return (
            <div className="dynamic">
                {body}
            </div>
        );
    };
}

export default App;