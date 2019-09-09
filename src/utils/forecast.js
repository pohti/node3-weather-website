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
            const summary = body.daily.data[0].summary
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            const temperatureHigh = body.daily.data[0].temperatureHigh
            const temperatureLow = body.daily.data[0].temperatureLow

            const forecastData = summary + 
            ' It is currently ' + temperature + ' degrees out. Highest temperature today is ' + temperatureHigh + 
            ' with a low of ' + temperatureLow + 
            '. There is ' + precipProbability + '% chance of rain'
            
            console.log(body.daily.data[0])
            callback (undefined,forecastData)
        }

    })
}
module.exports = forecast