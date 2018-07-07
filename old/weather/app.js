const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAqn39pABF1GDigO0xEczxwKaK-jS9V11Y`

axios.get(geocodeURL)
    .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address')
        }
        console.log(response.data)
        const latitude = response.data.results[0].geometry.location.lat,
            longitude = response.data.results[0].geometry.location.lng,
            weatherURL =`https://api.darksky.net/forecast/95c7f7665261b2550dc0a64c3cc9ab09/${latitude},${longitude}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    }).then(response => {
        const temperature = response.data.currently.temperature,
            apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
    })
    .catch(error => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unable to connect to API server')
        } else {
            console.log(error.message)
        }
    });