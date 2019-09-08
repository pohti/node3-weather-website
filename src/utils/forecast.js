const request = require('request')

const forecast = (latitude, longitude, callback) => {
    address = latitude + ',' + longitude
    const url = 'https://api.darksky.net/forecast/618b390bcb8993bdfe430db2aed884b1/'+ address + '?units=si'

    request ({ url, json: true}, (error, {body} ) => {
        if (error) {
            callback ('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback ('Unable to find location', undefined)
        } else {
            const forecastData = body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain'
            callback (undefined,forecastData)
        }

    })
}
module.exports = forecast