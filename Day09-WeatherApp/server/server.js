require('dotenv').config()
const express = require('express')
const cors = require('cors')
const getWeather = require('./services/weather-service')
const app = express()
const PORT = 3000;

app.use(cors())

app.get('/weather', async (req, res) => {
    var locationQuery = req.query.location ?? `${req.query.lat},${req.query.lon}`


    if(locationQuery == null || locationQuery == '')
    {
        res.status(400).json({error_details : 'Location is required'})
        return
    }

    var weatherInfo = await getWeather(locationQuery)

    if(!weatherInfo.is_success)
    {
        res.status(400).json(weatherInfo)
        return
    }

    res.json(weatherInfo)
})

app.listen(PORT, () => console.log('Server is listening on ' + PORT))