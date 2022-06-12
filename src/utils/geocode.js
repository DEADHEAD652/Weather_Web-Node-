const request = require('postman-request')

const geocode = (address, callback) => {

    //
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?types=poi&access_token=pk.eyJ1IjoiaGFtemFtYWxpazY4MjUiLCJhIjoiY2w0YnNwcHNmMXA1NzNkbXN0bXdpbDdrYiJ9.d4Nh_cgcqxAxWWYl5YzPLQ'

    request({
        url: url,
        json: true
    }, (error, response) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.lenght === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
            
        }





    })
}


module.exports = geocode