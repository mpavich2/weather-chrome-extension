import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import WeatherIcon from './WeatherIcon';
import HumidityDetails from './HumidityDetails';
import WindDetails from './WindDetails';

const Weather = (props) => {
    const windSpeed = props.weather.wind
        ? Math.round(props.weather.wind.speed)
        : '';
    const humidity = props.weather.main
        ? Math.round(props.weather.main.humidity)
        : '';
    const temperature = props.weather.main
        ? Math.round(props.weather.main.temp)
        : '';
    const iconId = props.weather.weather
        ? props.weather.weather[0].id
        : '';
    const weatherDescription = props.weather.weather
        ? props.weather.weather[0].main
        : '';

    return (
        <div className="weatherWrapper">
            <WeatherIcon iconId={ iconId } />
            <Typography variant="body2" component="div">
                { weatherDescription }
            </Typography>
            <Typography variant="h3" component="div">
                { temperature }
            </Typography>
            <div className="windHumidityWrapper">
                <WindDetails windSpeed={ windSpeed } />
                <HumidityDetails humidity={ humidity } />
            </div>
            <Button variant="outlined" style={{ margin: '10px', width: '250px'}}>Full Report</Button>
            <div>
                <Button variant="outlined" style={{ width: '120px', marginRight: '5px'}}>Daily</Button>
                <Button variant="outlined" style={{ width: '120px', marginLeft: '5px'}}>Air Quality</Button>
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