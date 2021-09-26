export const ReportData = (weather, hourly, units) => {
    const data = [
        {
            "name": "Temperature",
            "data": Math.round(weather.main.temp) + units
        },
        {
            "name": "High Temperature",
            "data": Math.round(weather.main.temp_max) + units
        },
        {
            "name": "Low Temperature",
            "data": Math.round(weather.main.temp_min) + units
        },
        {
            "name": "Accufeel",
            "data": Math.round(weather.main.feels_like) + units
        },
        {
            "name": "UV Index",
            "data": hourly[0].uvi
        },
        {
            "name": "Humidity",
            "data": Math.round(weather.main.humidity) + "%"
        },
        {
            "name": "Precipitation",
            "data": weather?.rain?.["1hr"] ? weather?.rain?.["1hr"] + "mm" : 'No Rain'
        },
        {
            "name": "Cloud Cover",
            "data": weather?.clouds?.all ? weather?.clouds?.all + "%" : 'No Clouds'
        },
        {
            "name": "Wind Speed",
            "data": Math.round(weather.wind.speed)
        },
        {
            "name": "Wind Direction",
            "data": weather.wind.deg
        }
    ];

    return data;
}