import React from 'react';
import { WiThunderstorm, WiSleet, WiStormShowers, WiSnow, WiFog, WiDaySunny, WiDayFog } from 'weather-icons-react';

const iconSize = 100;

const convertToIcon = (iconId) => {
    switch(true) {
        case iconId >= 200 & iconId < 232:
            return <WiThunderstorm size={ iconSize } />;
        case iconId >= 300 && iconId <= 321:
            return <WiSleet size={ iconSize } />;
        case iconId >= 500 && iconId <= 521:
            return <WiStormShowers size={ iconSize } />;
        case iconId >= 600 && iconId <= 622:
            return <WiSnow size={ iconSize } />;
        case iconId >= 701 && iconId <= 781:
            return <WiFog size={ iconSize } />;
        case iconId === 800:
            return <WiDaySunny size={ iconSize } />;
        case iconId >= 801 && iconId <= 804:
            return <WiDayFog size={ iconSize } />;
        default:
            return <WiDaySunny size={ iconSize } />;
    }
}

const WeatherIcon = (props) => {
    return (
        <div className="weatherIcon">
            { convertToIcon(props.iconId) }
        </div>
    )
}

export default WeatherIcon;