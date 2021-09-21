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

const SearchBar = (props) => {
    const distance = function(lat1, lon1, lat2, lon2) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;

        return dist;
    };

    CityData.sort(function(a, b) {
        if (props.coordinates) {
            const origLat = props.coordinates.latitude,
            origLong = props.coordinates.longitude;
        
            return distance(origLat, origLong, a.coord.lat, a.coord.lon) - distance(origLat, origLong, b.coord.lat, b.coord.lon);
        }
    });

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
                console.log(result);
            });
            getDailyWeatherDataByCoords(props.coordinates).then(result => {
                props.dispatch(
                    changeDailyForecast(result)
                );
                console.log(result);
            });
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
                console.log(result);
            });
        }
    }

    const handleSearchBarTextChanged = (event) => {
        props.dispatch(
            changeLocation(event.target.value)
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