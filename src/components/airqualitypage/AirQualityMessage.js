import React from 'react';
import { Typography } from '@material-ui/core';
import AirQualityIcon from './AirQualityIcon';

const AirQualityMessage = (props) => {
    const airQualityIndex = props.airQualityIndex;

    const convertAirQualityIndexToText = () => {
        switch (true) {
            case airQualityIndex === 1:
                return 'Good';
            case airQualityIndex === 2:
                return 'Fair';
            case airQualityIndex === 3:
                return 'Moderate';
            case airQualityIndex === 4:
                return 'Poor';
            case airQualityIndex === 5:
                return 'Very Poor';
            default:
                return 'Moderate';
        }
    }

    return (
        <div className="airQualityWrapper">
            <Typography variant="h2" component="div" sx={{ fontSize: 25 }}>
                Air Quality
            </Typography>
            <Typography variant="h3" component="div" sx={{ fontSize: 40 }}>
                { convertAirQualityIndexToText() }
            </Typography>
            <AirQualityIcon iconId={ airQualityIndex } />
        </div>
    )
}

export default AirQualityMessage;