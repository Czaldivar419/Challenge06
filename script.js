//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city



var submitButton = document.getElementById("searchBtn");

function callApi() {

// recieve user input and create city/state variables from it ------------------------------------------------------------------------------------------------------------

let apiKey = "f952f845f026570ab598c3f524d5b232";
let location = document.getElementById("location").value.split(",")

    let city = location[0];
    let state = location[1];

    let trimCity = city.trim();
    let trimState = state.trim();

console.log(trimCity);
console.log(trimState);

// Fetch lon/lat data to create respective varibles for use for forecasts----------------------------------------------------------------------------------------------------------------------------------------------------------------

geoData = "https://api.openweathermap.org/geo/1.0/direct?q=" + trimCity + "," + trimState + "," + "&limit=" + "1" + "&appid=" + apiKey;

fetch(geoData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {

      var lat = data[i].lat;
      var lon = data[i].lon;

      console.log("lat: " + lat);
      console.log("lon: " + lon);

// Fetch current conditions data using the lon/lat data derieved from user input-------------------------------------------------------------------------------------------------------------------------------------------

    currentConURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";
  
    fetch (currentConURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Current condition data ---------------")
        console.log(data);

// collect data for required current condition variables -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        

        var currTemp = data.main.temp;
        var currTime = data.dt;
        var cityName = data.name;
        var currHum = data.main.humidity;
        var currWind = data. wind.speed;
        var weatherIcon = data.weather.icon;
        
        


     

// Use lon/lat varibles in fetch request for 5 day forecast --------------------------------------------------------------------------------------------------------------------------------------------------------

forecastURL= "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

fetch(forecastURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("5 day/3 hour data -------------");
    console.log(data);

//-----day1----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var dayOneTemp = data.list[7].main.temp;
    var dayOneWind = data.list[7].wind.speed;
    var dayOneHum = data.list[7].main.humidity;
//-----day2--------------------------------------------------------------------------------------------------------------------
    var dayTwoTemp = data.list[15].main.temp;
    var dayTwoWind = data.list[15].wind.speed;
    var dayTwoHum = data.list[15].main.humidity;
//-----day3--------------------------------------------------------------------------------------------------------------------------
    var dayThreeTemp = data.list[23].main.temp;
    var dayThreeWind = data.list[23].wind.speed;
    var dayThreeHum = data.list[23].main.humidity;
//-----day4------------------------------------------------------------------------------------------------------------------------------
    var dayFourTemp = data.list[31].main.temp;
    var dayFourWind = data.list[31].wind.speed;
    var dayFourHum = data.list[31].main.humidity;
//------day5----------------------------------------------------------------------------------------------------------------------------------
    var dayFiveTemp = data.list[39].main.temp;
    var dayFiveWind = data.list[39].wind.speed;
    var dayFiveHum = data.list[39].main.humidity;




    for (var i = 0; i < data.length; i++); {

//---------current conditions---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   

var cityText = document.getElementById("city");
var text = document.createTextNode(cityName + ", "  + trimState + ": ");
var fore = document.createTextNode(" Current Conditions");
   cityText.appendChild(text);
   cityText.appendChild(fore);


var temp = document.getElementById("temp-now");
var text = document.createTextNode(currTemp + "°");
   temp.appendChild(text);

var wind = document.getElementById("wind-now");
var text = document.createTextNode(currWind + " mph");
    wind.appendChild(text);

var hum = document.getElementById("hum-now");
var text = document.createTextNode(currHum + "%");
   hum.appendChild(text);


//-----------------------------------------------day1------------------------------------------------------------------------------------------------------------------------------------------------------        

var date1 = document.getElementById("date1");
var text = document.createTextNode("Tomorrow:");
   date1.appendChild(text);


var temp1 = document.getElementById("temp1");
var text = document.createTextNode(dayOneTemp + "°");
   temp1.appendChild(text);

var wind1 = document.getElementById("wind1");
var text = document.createTextNode(dayOneWind + " mph");
    wind1.appendChild(text);

var hum1 = document.getElementById("hum1");
var text = document.createTextNode(dayOneHum + "%");
   hum1.appendChild(text);

//-----------------------------------------------------day2----------------------------------------------------------------------------------------------------------------------------------------------------------------

var date2 = document.getElementById("date2");
var text = document.createTextNode(moment().add(2, 'days').format("MMM Do") + ":");
   date2.appendChild(text);


var temp2 = document.getElementById("temp2");
var text = document.createTextNode(dayTwoTemp + "°");
    temp2.appendChild(text);
   
var wind2 = document.getElementById("wind2");
var text = document.createTextNode(dayTwoWind + " mph");
    wind2.appendChild(text);
   
var hum2 = document.getElementById("hum2");
var text = document.createTextNode(dayTwoHum + "%");
    hum2.appendChild(text);
   
//------------------------------------------------------day3--------------------------------------------------------------------------------------------------------------------------------------------------------------

var date3 = document.getElementById("date3");
var text = document.createTextNode(moment().add(3, 'days').format("MMM Do") + ":");
   date3.appendChild(text);


var temp3 = document.getElementById("temp3");
var text = document.createTextNode(dayThreeTemp + "°");
    temp3.appendChild(text);
   
var wind3 = document.getElementById("wind3");
var text = document.createTextNode(dayThreeWind + " mph");
    wind3.appendChild(text);
   
var hum3 = document.getElementById("hum3");
var text = document.createTextNode(dayThreeHum + "%");
    hum3.appendChild(text);

//-------------------------------------------------------day4------------------------------------------------------------------------------------------------------------------------------------------------------------------

var date4 = document.getElementById("date4");
var text = document.createTextNode(moment().add(4, 'days').format("MMM Do") + ":");
   date4.appendChild(text);


var temp4 = document.getElementById("temp4");
var text = document.createTextNode(dayFourTemp + "°");
    temp4.appendChild(text);
   
var wind4 = document.getElementById("wind4");
var text = document.createTextNode(dayFourWind + " mph");
    wind4.appendChild(text);
   
var hum4 = document.getElementById("hum4");
var text = document.createTextNode(dayFourHum + "%");
    hum4.appendChild(text);

//------------------------------------------------------day5---------------------------------------------------------------------------------------------------------------------------------------------------------------------

var date5 = document.getElementById("date5");
var text = document.createTextNode(moment().add(5, 'days').format("MMM Do") + ":");
   date5.appendChild(text);


var temp5 = document.getElementById("temp5");
var text = document.createTextNode(dayFiveTemp + "°");
    temp5.appendChild(text);
   
var wind5 = document.getElementById("wind5");
var text = document.createTextNode(dayFiveWind + " mph");
    wind5.appendChild(text);
   
var hum5 = document.getElementById("hum5");
var text = document.createTextNode(dayFiveHum + "%");
    hum5.appendChild(text);


//--------------------------------------------------save searches to local storage-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    

var searches = document.getElementById("location");
localStorage.setItem("location", searches.value);

var storedCities = localStorage.getItem("location");
console.log(storedCities)



}
});

    }
    )};

    





},)}
submitButton.addEventListener("click", callApi);