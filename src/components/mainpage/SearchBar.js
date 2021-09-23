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
import { geolocateCoordinates } from '../../utils/Geolocater';
import { getWeatherDataByCoords, getHourlyWeatherDataByCoords } from '../../utils/WeatherRetriever';
import CityData from '../../resources/CityData.json';
import { sortJsonArrayByClosestDistance } from '../../utils/Coordinates';
import { changeLocationOptions } from '../../redux/slices/LocationOptionsSlice';

const SearchBar = (props) => {
    useEffect(() => {
        if (!props.location) {
            geolocateCoordinates().then(result => {
                props.dispatch(
                    changeCoordinates(result)
                );
            });
        }
    }, []);

    useEffect(() => {
        if (props.coordinates && !props.weather.weather && !props.hourly) {
            fetchWeatherData();
        }
    }, [props.coordinates]);

    const fetchWeatherData = () => {
        getWeatherDataByCoords(props.coordinates).then(result => {
            props.dispatch(
                changeWeather(result)
            );
        });
        getHourlyWeatherDataByCoords(props.coordinates).then(result => {
            props.dispatch(
                changeHourlyForecast(result)
            );
        });
        createSortedLocationResultList();
    }

    const createSortedLocationResultList = () => {
        if (props.locationOptions.length === 0) {
            sortJsonArrayByClosestDistance(CityData, props.coordinates);
            const locationOptions = [
                ...new Set(
                    CityData.map((option) => { 
                        const name = option.name;
                        const state = option.state;
                        const country = option.country;
                        const lat = option.coord.lat.toFixed(2);
                        const lon = option.coord.lon.toFixed(2);

                        if (state === '') {
                            return name + ', ' + country + ', Lat: ' + lat + ', Lon: ' + lon;
                        }
                        return name + ', ' + state + ', ' + country + ', Lat: ' + lat + ', Lon: ' + lon;
                    })
                ),
            ];
            props.dispatch(
                changeLocationOptions(locationOptions)
            );
            if (!props.location) {
                props.dispatch(
                    changeLocation(locationOptions[0])
                );
            }
        }
    }

    const handleSearchBarTextChanged = (value) => {
        if (value) {
            props.dispatch(
                changeDailyForecast(null)
            );
            setNewCoordinatesAndLocation(value);
            fetchWeatherData();
        } else {
            props.dispatch(
                changeLocation('')
            );
        }
    }

    const setNewCoordinatesAndLocation = (value) => {
        props.dispatch(
            changeLocation(value)
        );
        const values = value.split(', ');
        let latIndex = 3;
        let lonIndex = 4;
        if (values.length === 4) {
            latIndex -= 1;
            lonIndex -= 1;
        }
        const coordinates = {
            latitude: values[latIndex].slice(5),
            longitude: values[lonIndex].slice(5)
        }
        props.dispatch(
            changeCoordinates(coordinates)
        );
    }

    const handleSearchBarEnterPressed = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    const OPTIONS_LIMIT = 15;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT,
        matchFrom: 'start'
    });

    return (
        <div className="searchBarWrapper">
            <Autocomplete
                value={ props.location }
                filterOptions={ filterOptions }
                freeSolo
                className="searchBar"
                options={ props.locationOptions }
                onChange={(event, newValue) => {
                    handleSearchBarTextChanged(newValue);
                }}
                onSubmit={ (event) => handleSearchBarEnterPressed(event) }
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
                            )
                        }}
                    />
                )}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        coordinates: state.coordinates,
        locationOptions: state.locationOptions,
        weather: state.weather,
        hourly: state.hourly
    }
}

export default connect(mapStateToProps)(SearchBar);