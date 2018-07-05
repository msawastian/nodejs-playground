const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const request = require('request');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
});

request({
    url: `https://api.darksky.net/forecast/95c7f7665261b2550dc0a64c3cc9ab09/52.4293162,16.9221588`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    } else {
        console.log('Unable to fetch weather');
    }
});


