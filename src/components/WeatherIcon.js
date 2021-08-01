import React from 'react';
import { WiThunderstorm, WiSleet, WiStormShowers, WiSnow, WiFog, WiDaySunny, WiDayFog } from 'weather-icons-react';

const iconSize = 100;

const convertToIcon = (iconName) => {
    switch(true) {
        case iconName === 'Thunderstorm':
            return <WiThunderstorm size={ iconSize } />;
        case iconName === 'Drizzle':
            return <WiSleet size={ iconSize } />;
        case iconName === 'Rain':
            return <WiStormShowers size={ iconSize } />;
        case iconName === 'Snow':
            return <WiSnow size={ iconSize } />;
        case iconName === 'Atmosphere':
            return <WiFog size={ iconSize } />;
        case iconName === 'Clear':
            return <WiDaySunny size={ iconSize } />;
        case iconName === 'Clouds':
            return <WiDayFog size={ iconSize } />;
        default:
            return <WiDaySunny size={ iconSize } />;
    }
}

const WeatherIcon = (props) => {
    return (
        convertToIcon(props.iconName)
    )
}

export default WeatherIcon;