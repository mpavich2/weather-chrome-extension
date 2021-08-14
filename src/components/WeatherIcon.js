import React from 'react';
import { WiThunderstorm, WiSleet, WiStormShowers, WiSnow, WiFog, WiDaySunny, WiDayFog } from 'weather-icons-react';

const WeatherIcon = (props) => {
    const convertToIcon = (iconId) => {
        const iconSize = props.size || 100;
        switch(true) {
            case iconId >= 200 & iconId < 232:
                return <WiThunderstorm size={ iconSize } color={ props.color } />;
            case iconId >= 300 && iconId <= 321:
                return <WiSleet size={ iconSize } color={ props.color } />;
            case iconId >= 500 && iconId <= 521:
                return <WiStormShowers size={ iconSize } color={ props.color } />;
            case iconId >= 600 && iconId <= 622:
                return <WiSnow size={ iconSize } color={ props.color } />;
            case iconId >= 701 && iconId <= 781:
                return <WiFog size={ iconSize } color={ props.color } />;
            case iconId === 800:
                return <WiDaySunny size={ iconSize } color={ props.color } />;
            case iconId >= 801 && iconId <= 804:
                return <WiDayFog size={ iconSize } color={ props.color } />;
            default:
                return <WiDaySunny size={ iconSize } color={ props.color } />;
        }
    }

    return convertToIcon(props.iconId);
}

export default WeatherIcon;