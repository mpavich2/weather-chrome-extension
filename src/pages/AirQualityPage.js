import React, { useEffect } from 'react';
import AirQualityMessage from '../components/airqualitypage/AirQualityMessage';
import Header from '../components/Header';
import { changeAirQuality } from '../redux/slices/AirQualitySlice';
import { getAirQualityDataByCoords } from '../utils/WeatherRetriever';
import { connect } from 'react-redux';

const AirQualityPage = (props) => {
    const airQualityIndex = props.airQuality?.list?.[0].main.aqi;
    const cityName = props.location.split(', ')[0];

    useEffect(() => {
        getAirQualityDataByCoords(props.coordinates).then(response => {
            props.dispatch(
                changeAirQuality(response)
            );
        });
    }, []);

    return (
        <div>
            <Header />
            <AirQualityMessage airQualityIndex={ airQualityIndex } cityName={ cityName } />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        airQuality: state.airQuality,
        coordinates: state.coordinates,
        location: state.location
    }
}

export default connect(mapStateToProps)(AirQualityPage);