
const request = require('postman-request')

const forecast = (latitude,longitude,callback) => {
const url = 'http://api.weatherstack.com/current?access_key=c182be1e700717b3c3633616e156258f&query='+latitude+','+longitude+'&units=m'

request({url : url, json :true} , (error,response) => {
if(error){
    callback('Unable to connect internet!',undefined)
}
 else if(response.body.error){
     callback("Can't  found the location.Type another one!",undefined)
 }
 else{
     const temperature = response.body.current.temperature
     const feelslike = response.body.current.feelslike
     const description = response.body.current.weather_descriptions[0]
 callback(undefined,{
    message : description+'.It currently is '+temperature+' degree and it feels like '+feelslike
    
}
    
    )
 
 }



})


}

module.exports = forecast
