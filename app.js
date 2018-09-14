//GOOGLE API key ==> AIzaSyB7SE6rGSWYL6M7HgEbSgk6vcisjUhd6zw
//MAPQUEST API key ==> A1u4OD2e8VBEzqz3EAYjOu2g6Vy7cN49

const yargs = require('yargs'); 

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        }
})
    .help()
    .alias('help', 'h')
    .argv; 

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage); 
            } else {
                console.log(`Current Temperature: ${weatherResults.temperature}°F, but feels like ${weatherResults.apparentTemperature}°F`);
                console.log(`Current Forecast: ${weatherResults.summary}`);
                console.log(`Projected Forecase: ${weatherResults.hourlySummary}`)
            }
        });
    }
});

//lat, lng, callback 
 


   