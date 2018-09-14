const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=A1u4OD2e8VBEzqz3EAYjOu2g6Vy7cN49&location=${encodedAddress}`,
    json: true,
}, (error, response, body) => {
    if(error) {
        callback('Unable to connect to servers.');        
    } else {
    callback(undefined, {
        address: `${body.results[0].locations[0].street}  ${body.results[0].locations[0].adminArea5},${body.results[0].locations[0].adminArea3} ${body.results[0].locations[0].postalCode}, ${body.results[0].locations[0].adminArea1}`, 
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng,
            });
        }   
    });
};

module.exports.geocodeAddress = geocodeAddress;