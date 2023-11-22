// API Setup

var APIKey = "3ae9b9a3bec3ebb3884cc2d6643eedaf"


var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=" + APIKey

cityName = []

fetch(queryURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    
    console.log(data)

    searchedName = data.city.name

    pZero = $("<p>").text("City: " + searchedName);

    // Temp
    for (var i = 8; i < 33; i += 8) {

        var currentTemp = data.list[0].main.temp

        var temp = data.list[i].main.temp
        
        pOne = $("<p>").text("Temperature: " + currentTemp + " Celsius")

        
    }



    // Wind
    for (var j = 8; j < 33; j += 8) {

        var currentWind = data.list[0].wind.speed

        var wind = data.list[j].wind.speed

        pTwo = $("<p>").text("Wind Speeds: " + currentWind + " KPH")
    }
        

    //Humidity
    for (var k = 8; k < 33; k += 8) {

        var currentHum = data.list[0].main.humidity

        var hum = data.list[k].main.humidity

        pThree = $("<p>").text("Humidity: " + currentHum + "%")

        
    }


    currentDay = $("#currentDay")

    currentDay.append(pZero, pOne, pTwo, pThree)



    



})

