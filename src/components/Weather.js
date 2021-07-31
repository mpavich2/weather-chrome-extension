import React from 'react';
import { WiThunderstorm, WiSleet, WiStormShowers, WiSnow, WiFog, WiDaySunny, WiDayFog, WiStrongWind, WiHumidity } from 'weather-icons-react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const weatherApi = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

const iconSize = 100;

const icons = {
    Thunderstorm: <WiThunderstorm size={ iconSize } />,
    Drizzle: <WiSleet size={ iconSize } />,
    Rain: <WiStormShowers />,
    Snow: <WiSnow size={ iconSize } />,
    Atmosphere: <WiFog size={ iconSize } />,
    Clear: <WiDaySunny size={ iconSize } />,
    Clouds: <WiDayFog size={ iconSize } />,
    Wind: <WiStrongWind size={ 25 } />,
    Humidity: <WiHumidity size={ 25 } />
}

const Weather = () => {
    return (
        <div>
            <div className="weatherWrapper">
                {icons.Thunderstorm}
                <Typography variant="body2" component="div">
                    Thunderstorm
                </Typography>
                <Typography variant="h3" component="div">
                    75°F
                </Typography>
                <div className="windHumidityWrapper">
                    <div className="items">
                        {icons.Wind} 5 mi/h
                    </div>
                    <div className="items">
                        {icons.Humidity} 63%
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

export default Weather;