const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //http://api.weatherstack.com/historical?access_key=c182be1e700717b3c3633616e156258f&query=New%20York&historical_date=2015-01-21&hourly=1
    const url = 'http://api.weatherstack.com/historical?access_key=c182be1e700717b3c3633616e156258f&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast