import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { changeLocation } from '../redux/slices/LocationSlice';
import { changeWeather } from '../redux/slices/WeatherSlice';
import { getCityName } from '../utils/Geolocater';
import { getWeatherDataByCity } from '../utils/WeatherRetriever';

const SearchBar = (props) => {
    useEffect(() => {
        getCityName().then(response => {
            props.dispatch(
                changeLocation(response)
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
        location: state.location
    }
}

export default connect(mapStateToProps)(SearchBar);