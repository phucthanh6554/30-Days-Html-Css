const apiKey = process.env.API_KEY;

async function getWeather(query) {
    var url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`

    var response = await fetch(url)

    if(response.status != 200)
    {
        var errorResponse = await response.json()

        return {
            is_success : false,
            error_details : errorResponse.error.message
        }
    }

    var json = await response.json()
    
    var result = {
        is_success : true,
        location_name : json.location.name,
        location_time : json.location.localtime,
        temparature : json.current.temp_c,
        weather : json.current.condition.text,
        visibility : json.current.vis_km * 1000,
        wind_kph : json.current.wind_kph,
        cloud : json.current.cloud
    }

    return result;
}

module.exports = getWeather