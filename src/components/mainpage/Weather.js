import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import WeatherIcon from '../WeatherIcon';
import HumidityDetails from './HumidityDetails';
import WindDetails from './WindDetails';

const Weather = (props) => {
    while(props.weather.weather === null || props.weather.weather === undefined) {
        return <p>hi</p>;
    }
    const windSpeed = Math.round(props.weather?.wind?.speed) ?? '';
    const humidity = Math.round(props.weather?.main?.humidity) ?? '';
    const temperature = Math.round(props.weather?.main?.temp) ?? '';
    const iconId = props.weather?.weather?.[0].id ?? '';
    const weatherDescription = props.weather?.weather?.[0].main ?? '';

    return (
        <div className="weatherWrapper">
            <div className="iconWrapper">
                <WeatherIcon iconId={ iconId } />
            </div>
            <Typography variant="body2" component="div">
                { weatherDescription }
            </Typography>
            <Typography variant="h3" component="div">
                { Math.round(temperature) }°F
            </Typography>
            <div className="windHumidityWrapper">
                <WindDetails windSpeed={ windSpeed } />
                <HumidityDetails humidity={ humidity } />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather);