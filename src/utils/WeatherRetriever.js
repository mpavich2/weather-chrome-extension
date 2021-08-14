const weatherApi = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}

export async function getWeatherDataByCity(cityName) {
    return await fetch(`${weatherApi.baseUrl}weather?q=${cityName}&units=imperial&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export async function getHourlyWeatherDataByCity(coords) {
    return await fetch(`${weatherApi.baseUrl}onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,daily,alerts&units=imperial&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result.hourly.slice(1, 6);
        });
}