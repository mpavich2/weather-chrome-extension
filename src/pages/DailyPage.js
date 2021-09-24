import React, { useEffect } from 'react';
import Header from '../components/Header';
import DailyForecastList from '../components/dailypage/DailyForecastList';
import { connect } from 'react-redux';
import { changeDailyForecast } from '../redux/slices/DailySlice';
import { getDailyWeatherDataByCoords } from '../utils/WeatherRetriever';

const DailyPage = (props) => {
    useEffect(() => {
        if (!props.daily) {
            getDailyWeatherDataByCoords(props.coordinates).then(result => {
                props.dispatch(
                    changeDailyForecast(result)
                );
            });
        }
    }, []);

    return (
        <div>
            <Header />
            <DailyForecastList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        daily: state.daily,
        coordinates: state.coordinates
    }
}

export default connect(mapStateToProps)(DailyPage);