// Array for Storage
cityNames = ["London", "Melbourne", "Tokyo"]

// Displaying Weather Function
function displayWeather () {

    // API Setup
    var APIKey = "3ae9b9a3bec3ebb3884cc2d6643eedaf"
    var cityName = $(this).attr("data-city")
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&appid=" + APIKey

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data)

        $("#currentDay").empty();
        $("#fourDay").empty();

        searchedName = data.city.name

        pZero = $("#currentDay-text").text("Current day in " + searchedName + ":");

        // Looping API for Data
        for (var i = 8; i < 33; i += 8) {

            //Time
            var currentTime = data.list[0].dt_txt

            var time = data.list[i].dt_txt

            var now = dayjs(currentTime).format("dddd")

            var after = dayjs(time).format("dddd")

            pOne = $("<p>").text(now)
      
            // Temp
            var currentTemp = data.list[0].main.temp

            var temp = data.list[i].main.temp
            
            pTwo = $("<p>").text("Temperature: " + currentTemp + " °C")

            // Wind
            var currentWind = data.list[0].wind.speed

            var wind = data.list[i].wind.speed

            pThree = $("<p>").text("Wind Speeds: " + currentWind + " KPH")

            //Humidity
            var currentHum = data.list[0].main.humidity

            var hum = data.list[i].main.humidity

            pFour = $("<p>").text("Humidity: " + currentHum + "%")

            // The next 4 days
            fourTime = $("<p>").text(after)
            fourTemp = $("<p>").text("Temperature: " + temp + " °C")
            fourWind = $("<p>").text("Wind Speeds: " + wind + " KPH")
            fourHum = $("<p>").text("Humidity: " + hum + "%")

            var four = $("#fourDay")

            var fourDiv = $("<div class='col card'>")

            fourDiv.append(fourTime, fourTemp, fourWind, fourHum)

            four.append(fourDiv)

        } 

        currentDay = $("#currentDay")

        currentDay.append(pOne, pTwo, pThree, pFour)
        
    })
}

//Search History Buttons
function historyButtons() {

    $("#citySearched").empty();

    for (var i = 0; i < cityNames.length; i++) {
        var a = $("<button type='button' class='btn btn-secondary w-100 btnSpace' id='cities'>")

        a.attr("data-city", cityNames[i]);

        a.text(cityNames[i])

        $("#citySearched").append(a)
    }
}

$("#searchButton").on("click", function(event) {
    event.preventDefault();

    var city = $("#inputBar").val().trim();

    cityNames.push(city);

    historyButtons();
})

$(document).on("click", "#cities", displayWeather);

historyButtons();
