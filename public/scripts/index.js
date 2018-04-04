/* global $ */

'use strict';

const render = (function(){
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
        callback(data);
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
        callback(picture);
      }
    });
  }


  function displaySearchData(data, picture) {
    data.cumulativeplayerstats.playerstatsentry.forEach(stats => {
      const found = picture.activeplayers.playerentry.find(pic => {
        return pic.player.ID === stats.player.ID;
      });
      console.log(found);
      stats.player.pic = found;
    });
    console.log(data.cumulativeplayerstats.playerstatsentry);
    const output = (data.cumulativeplayerstats.playerstatsentry);
    const html = output.map(player => {
      console.log(player);
      return `
      <div id="box1"> <a href="#"><img src="${player.player.pic.player.officialImageSrc}" alt="" /></a>
      <h2 class="subtitle">${player.player.FirstName} ${player.player.LastName}</h2>
      <p>${player.stats.Homeruns['#text']}</p>
      <ul class="contact">
        <li><a href="#" class="icon icon-facebook"><span></span></a></li>
      </ul>
    </div>
      `;
    });
   
    $('#featured').html(html);



    // $('.js-players-list').html(`<div> ${data.cumulativeplayerstats.playerstatsentry[0].player.FirstName}${data.cumulativeplayerstats.playerstatsentry[0].player.LastName}${data.cumulativeplayerstats.playerstatsentry[0].player.JerseyNumber}</div>`);

  }

  return {
    getDataFromApi,
    getPictureFromApi,
    displaySearchData
  };

})();

$(function () {
  render.getDataFromApi(function (data) {
    render.getPictureFromApi(function (picture) {
      render.displaySearchData(data, picture);
    });
  });
});
