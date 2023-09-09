const getWeatherUrl = 'http://localhost:3000/weather'
const body = document.getElementById('body')
const searchInput = document.getElementById('search-input')

const locationName = document.getElementById('location_name')
const locationTime = document.getElementById('location_time')
const temperature = document.getElementById('temperature')
const weather = document.getElementById('weather')
const visibility = document.getElementById('visibility')
const wind_kmh = document.getElementById('wind_kmh')
const cloud = document.getElementById('cloud')

function getCurrentLocationWeather() {
    let queryLocation = 'Ha noi' // default value

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(location => {
            queryLocation = `${location.coords.latitude},${location.coords.longitude}`
            getWeather(queryLocation)
            return
        })
    }

    getWeather(queryLocation)

}

getCurrentLocationWeather()

// Location can be city name or lat,lon
function getWeather(query) {
    let url = getWeatherUrl + '?location=' + query

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.is_success == false) {
                alert(json.error_details)
                return
            }

            locationName.innerText = json.location_name
            locationTime.innerText = json.location_time
            temperature.innerText = json.temparature
            weather.innerText = json.weather
            visibility.innerText = json.visibility + ' (m)'
            wind_kmh.innerText = json.wind_kph + ' (kph)'
            cloud.innerText = json.cloud + ' %'

            if (json.temparature < 15) {
                body.classList.remove('body-hot')
                body.classList.add('body-cold')
            } else {
                body.classList.add('body-hot')
                body.classList.remove('body-cold')
            }
        })
}

searchInput.onkeydown = function (e) {
    if (e.key == 'Enter') {
        let location = e.target.value

        getWeather(location)
    }
}