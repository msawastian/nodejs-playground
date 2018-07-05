const request = require('request');

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAqn39pABF1GDigO0xEczxwKaK-jS9V11Y`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Something went wrong.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};