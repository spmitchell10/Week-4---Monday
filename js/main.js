jQuery(function() {

    getData("cincinnati");

    function getData(city) {

        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=imperial&cnt=6&APPID=b5004642f125f0706b3f6d7616fa2635`,
            success: function(response) {
                console.log(response);
                response.list.forEach(function(weather) {
                    $('#weather').append(`
                <div class="rain col-md-2">
                  <h4 class="snowstorm">Day: ${weather.temp.day}℉</h4>
                  <h4 class="sleet">Night: ${weather.temp.night}℉</h4>
                  <h4 class="condition">${weather.weather[0].description}</h4>
                  <img class"image" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
                </div>        
              `);
                })
            }
        })
    }

    $('form').on("submit", function(day) {

        day.preventDefault();
        var input = $('input').val();
        $("#weather").html("");
        getData(input);
    })

});




// var weatherApiUrl = "";

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(loc) {
//     weatherApiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + loc.coords.latitude + "&lon=" + loc.coords.longitude + " &mode=json&units=imperial&cnt=6&APPID=b5004642f125f0706b3f6d7616fa2635";
//     getWeather(weatherApiUrl);
//   });
// } else {
//   $(body).innerHTML("No geolocation");
// }
