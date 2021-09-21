import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete, InputAdornment, TextField } from '@material-ui/core';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { connect } from 'react-redux';
import { changeLocation } from '../../redux/slices/LocationSlice';
import { changeWeather } from '../../redux/slices/WeatherSlice';
import { changeCoordinates } from '../../redux/slices/CoordinatesSlice';
import { changeHourlyForecast } from '../../redux/slices/HourlySlice';
import { changeDailyForecast } from '../../redux/slices/DailySlice';
import { getCityName, getCoordinates } from '../../utils/Geolocater';
import { getWeatherDataByCity, getHourlyWeatherDataByCoords, getDailyWeatherDataByCoords } from '../../utils/WeatherRetriever';
import CityData from '../../resources/CityData.json';
import { sortJsonArrayByClosestDistance } from '../../utils/Coordinates';

const SearchBar = (props) => {
    useEffect(() => {
        if (!props.location) {
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
        }
    }, []);

    useEffect(() => {
        if (props.coordinates) {
            getHourlyWeatherDataByCoords(props.coordinates).then(result => {
                props.dispatch(
                    changeHourlyForecast(result)
                );
            });
            getDailyWeatherDataByCoords(props.coordinates).then(result => {
                props.dispatch(
                    changeDailyForecast(result)
                );
            });
            sortJsonArrayByClosestDistance(CityData, props.coordinates);
        }
    }, [props.coordinates]);

    useEffect(() => {
        if (props.location && props.location !== "") {
            const timeoutId = setTimeout(() => getWeatherDataForSearchedCity(props.location), 1000);
            return () => clearTimeout(timeoutId);
        } else {
            props.dispatch(props.dispatch(changeLocation("")));
        }
    }, [props.location]);

    const getWeatherDataForSearchedCity = () => {
        if (props.location) {
            getWeatherDataByCity(props.location).then(result => {
                props.dispatch(
                    changeWeather(result)
                );
            });
        }
    }

    const handleSearchBarTextChanged = (value) => {
        props.dispatch(
            changeLocation(value)
        );
    }

    const handleSearchBarEnterPressed = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    const OPTIONS_LIMIT = 10;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT
    });

    return (
        <div className="searchBarWrapper">
            <Autocomplete
                filterOptions={ filterOptions }
                freeSolo
                className="searchBar"
                disableClearable
                options={ CityData }
                getOptionLabel={ option => option.name + ', ' + option.state + ', ' + option.country + ', Lat: ' + option.coord.lat + ', Lon: ' + option.coord.lon }
                onChange={(event, newValue) => {
                    console.log(JSON.stringify(newValue, null, ' '));
                }}
                onSubmit={ (event) => handleSearchBarEnterPressed }
                renderInput={ (params) => (
                    <TextField
                        {...params}
                        label="Search Location"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            type: 'search',
                        }}
                    />
                )}
            />
            <p></p>
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