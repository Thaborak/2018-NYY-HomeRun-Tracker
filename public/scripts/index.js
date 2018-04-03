/* global $ */

'use strict';

// const MySportsFeeds = require('mysportsfeeds-node');
// const msf = new MySportsFeeds('1.2', true, null);

// msf.authenticate('thaborak', 'petproject');
// const getDataFromApi = function (searchTerm)  {
//   msf.getData('mlb', '2017-regular', 'cumulative_player_stats', 'json', { player: `${searchTerm}` });
// };

function getDataFromApi(searchTerm, callback) {
  let url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?playerstats=HR&player=${searchTerm}`;
  $.ajax ({
    type: 'GET',
    url,
    dataType: 'json',
    async: false,
    headers: {
      'Authorization': 'Basic ' + btoa( 'thaborak'  + ':' + 'petproject' )
    },
    data: $.parseJSON,
    success: function (data) {
      console.log(data);
      callback(data);
    }
  });
}



function displaySearchData(data) {
  console.log(data);
  $('.js-players-list').html(`<div> ${data.cumulativeplayerstats.playerstatsentry[0].player.FirstName}${data.cumulativeplayerstats.playerstatsentry[0].player.LastName}${data.cumulativeplayerstats.playerstatsentry[0].player.JerseyNumber}</div>`);

}

function watchSubmit() {
  $('.js-new-player-form').submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-new-player-entry');
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val('');
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);