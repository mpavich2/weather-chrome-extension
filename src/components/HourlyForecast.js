import React from 'react';
import Paper from '@material-ui/core/Paper';
import { WiThunderstorm } from 'weather-icons-react';
import Typography from '@material-ui/core/Typography';


const HourlyForecast = () => {
    return (
        <Paper className="hourlyForecastWrapper">
            <Typography variant="caption" component="div">
                12:00 PM
            </Typography>
            <WiThunderstorm size={ 60 } color="#6a6a6a" />
            <Typography variant="subtitle1" component="div">
                77°F
            </Typography>
        </Paper>
    )
}

export default HourlyForecast;