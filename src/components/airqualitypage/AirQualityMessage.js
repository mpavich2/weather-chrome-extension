import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import AirQualityIcon from './AirQualityIcon';
import { changeAirQuality } from '../../redux/slices/AirQualitySlice';
import { getAirQualityDataByCoords } from '../../utils/WeatherRetriever';
import { connect } from 'react-redux';

const AirQualityMessage = (props) => {
    const airQualityIndex = props.airQuality?.list?.[0].main.aqi;

    useEffect(() => {
        getAirQualityDataByCoords(props.coordinates).then(response => {
            props.dispatch(
                changeAirQuality(response)
            );
        });
    }, []);

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
            <AirQualityIcon iconId={ airQualityIndex } />
            <Typography variant="h2" component="div" className="airQualityIndexMessage" sx={{ fontSize: 25 }}>
                { convertAirQualityIndexToText() }
            </Typography>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        airQuality: state.airQuality,
        coordinates: state.coordinates
    }
}

export default connect(mapStateToProps)(AirQualityMessage);