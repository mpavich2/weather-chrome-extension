import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Clock from './Clock';
import WeatherIcon from './WeatherIcon';
import { WiThunderstorm } from 'weather-icons-react';


const HourlyForecast = (props) => {
    if (!props.hourly) {
        return null;
    }

    const temperature = Math.round(props.hourly[props.hour].temp);
    const iconId = props.hourly[props.hour].weather[0].id;

    return (
        <Paper className="hourlyForecastWrapper">
            <Clock hoursToAdd={ props.hour + 1 } variant="caption" />
            <WeatherIcon iconId={ iconId } size={ 60 } color="#6a6a6a" />
            <Typography variant="subtitle1" component="div">
                { temperature }°F
            </Typography>
        </Paper>
    )
}

const mapStateToProps = (state) => {
    return {
        hourly: state.hourly
    }
}

export default connect(mapStateToProps)(HourlyForecast);