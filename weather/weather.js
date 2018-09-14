//forecase API key ==> c709335afcac301e275d6a87c9385132

const request = require('request');

var getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/c709335afcac301e275d6a87c9385132/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary, 
                hourlySummary: body.minutely.summary,
            })
        } else {
            callback('Unable to fetch weather.');
        }
    });
};



module.exports.getWeather = getWeather;