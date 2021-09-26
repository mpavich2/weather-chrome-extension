const weatherApi = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    baseUrl: "https://pro.openweathermap.org/data/2.5/"
}

const convertUnitsToText = (units) => {
    if (units === '°F') {
        return 'imperial';
    }

    return 'metric';
}

export async function getWeatherDataByCity(cityName, units) {
    return await fetch(`${weatherApi.baseUrl}weather?q=${cityName}&units=${convertUnitsToText(units)}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export async function getWeatherDataByCoords(coords, units) {
    return await fetch(`${weatherApi.baseUrl}weather?lat=${coords.latitude}&lon=${coords.longitude}&units=${convertUnitsToText(units)}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export async function getWeatherDataByCityId(cityId, units) {
    return await fetch(`${weatherApi.baseUrl}weather?id=${cityId}&units=${convertUnitsToText(units)}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

export async function getHourlyWeatherDataByCoords(coords, units) {
    return await fetch(`${weatherApi.baseUrl}onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,daily,alerts&units=${convertUnitsToText(units)}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result.hourly.slice(1, 6);
        });
}

export async function getDailyWeatherDataByCoords(coords, units) {
    return await fetch(`${weatherApi.baseUrl}onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,hourly,alerts&units=${convertUnitsToText(units)}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result.daily.slice(1, 8);
        });
}

export async function getAirQualityDataByCoords(coords, units) {
    return await fetch(`${weatherApi.baseUrl}air_pollution?lat=${coords.latitude}&lon=${coords.longitude}&appid=${weatherApi.key}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}