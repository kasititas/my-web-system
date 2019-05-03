let appId='de411aae5b9451c85c25d4dd42326856';
let units='metric';

function searchWeather(searchTerm){
$.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appId}&units=${units}`,
function(data){
    console.log(data);

    var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    var temp =Math.floor(data.main.temp);
}

)
}
document.getElementById("searchBtn").addEventListener('click', () => {
    var searchTerm = document.getElementById("searchInput").value;
    if(searchTerm){
        searchWeather(searchTerm);
    }
})
