import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import WeatherIcon from '../WeatherIcon';
import HumidityDetails from './HumidityDetails';
import WindDetails from './WindDetails';

const Weather = (props) => {
    const [windSpeed, setWindSpeed] = useState();
    const [humidity, setHumidity] = useState();
    const [temperature, setTemperature] = useState();
    const [iconId, setIconId] = useState();
    const [weatherDescription, setWeatherDescription] = useState();

    useEffect(() => {
        setWindSpeed(Math.round(props.weather?.wind?.speed) ?? '');
        setHumidity(Math.round(props.weather?.main?.humidity) ?? '');
        setTemperature(Math.round(props.weather?.main?.temp) ?? '');
        setIconId(props.weather?.weather?.[0].id ?? '');
        setWeatherDescription(props.weather?.weather?.[0].main ?? '');
    }, [props.weather]);

    return (
        <div className="weatherWrapper">
            <div className="iconWrapper">
                <WeatherIcon iconId={ iconId } />
            </div>
            <Typography variant="body2" component="div">
                { weatherDescription }
            </Typography>
            <Typography variant="h3" component="div">
                { Math.round(temperature) }{ props.units }
            </Typography>
            <div className="windHumidityWrapper">
                <WindDetails windSpeed={ windSpeed } units={ props.units } />
                <HumidityDetails humidity={ humidity } />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        units: state.units
    }
}

export default connect(mapStateToProps)(Weather);