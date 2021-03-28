var searchBtn = document.getElementById('searchBtn');
var atlantaBtn = document.getElementById('list-atlanta-list');
var miamiBtn = document.getElementById('list-miami-list');
var dallasBtn = document.getElementById('list-dallas-list');
var seattleBtn = document.getElementById('list-seattle-list');
var atlSpan = document.getElementById('atlSpan');

function atlantaApi() {
  var atlantaUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=e557a6d152cff484644bf2022416bafa';

  fetch(atlantaUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var displayTemp = document.createElement('h3');
        var displayHumid = document.createElement('h4');
        displayTemp.textContent = data[i].temp;
        displayHumid.textContent = data[i].humidity;
        atlSpan.append(displayTemp);
        atlSpan.append(displayHumid);
        
      }
    });
}
atlantaBtn.addEventListener('click', atlantaApi);