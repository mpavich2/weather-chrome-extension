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

export async function getWeatherDataByCityId(cityId) {
    return await fetch(`${weatherApi.baseUrl}weather?id=${cityId}&units=imperial&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export async function getHourlyWeatherDataByCoords(coords) {
    return await fetch(`${weatherApi.baseUrl}onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,daily,alerts&units=imperial&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result.hourly.slice(1, 6);
        });
}

export async function getDailyWeatherDataByCoords(coords) {
    return await fetch(`${weatherApi.baseUrl}onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result.daily.slice(1, 8);
        });
}

export async function getAirQualityDataByCoords(coords) {
    return await fetch(`${weatherApi.baseUrl}air_pollution?lat=${coords.latitude}&lon=${coords.longitude}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}