import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { changeLocation } from '../redux/slices/LocationSlice';
import { changeWeather } from '../redux/slices/WeatherSlice';
import { changeCoordinates } from '../redux/slices/CoordinatesSlice';
import { changeHourlyForecast } from '../redux/slices/HourlySlice';
import { getCityName, getCoordinates } from '../utils/Geolocater';
import { getWeatherDataByCity, getHourlyWeatherDataByCity } from '../utils/WeatherRetriever';

const SearchBar = (props) => {
    useEffect(() => {
        getCityName().then(response => {
            props.dispatch(
                changeLocation(response)
            );
        });
        getCoordinates().then(result => {
            props.dispatch(
                changeCoordinates(result)
            );
        });
    }, []);

    useEffect(() => {
        if (props.location) {
            getWeatherDataByCity(props.location).then(result => {
                props.dispatch(
                    changeWeather(result)
                );
                console.log(result);
            });
        }
    }, [props.location]);

    useEffect(() => {
        if (props.coordinates) {
            getHourlyWeatherDataByCity(props.coordinates).then(result => {
                props.dispatch(
                    changeHourlyForecast(result)
                );
                console.log(result);
            });
        }
    }, [props.coordinates]);

    return (
        <div className="searchBarWrapper">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    value={props.location}
                    inputProps={{ 'aria-label': 'search location' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        coordinates: state.coordinates
    }
}

export default connect(mapStateToProps)(SearchBar);