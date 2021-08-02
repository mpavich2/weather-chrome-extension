import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeWeatherIcon } from '../redux/slices/WeatherIconSlice';
import { changeTemperature } from '../redux/slices/TemperatureSlice';
import { WiStrongWind, WiHumidity } from 'weather-icons-react';
import WeatherIcon from './WeatherIcon';

const Weather = (props) => {
    useEffect(() => {
        props.dispatch(
            changeWeatherIcon('Thunderstorm')
        );
        props.dispatch(
            changeTemperature('75°F')
        );
    });

    return (
        <div>
            <div className="weatherWrapper">
                <WeatherIcon iconName={ props.weatherIcon } />
                <Typography variant="body2" component="div">
                    { props.weatherIcon }
                </Typography>
                <Typography variant="h3" component="div">
                    { props.temperature }
                </Typography>
                <div className="windHumidityWrapper">
                    <div className="items">
                        <WiStrongWind size={ 25 } /> 5 mi/h
                    </div>
                    <div className="items">
                        <WiHumidity size={ 25 } /> 63%
                    </div>
                </div>
                <Button variant="outlined" style={{ margin: '10px', width: '250px'}}>Full Report</Button>
                <div>
                    <Button variant="outlined" style={{ width: '120px', marginRight: '5px'}}>Daily</Button>
                    <Button variant="outlined" style={{ width: '120px', marginLeft: '5px'}}>Air Quality</Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weatherIcon: state.weatherIcon,
        temperature: state.temperature,
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather);