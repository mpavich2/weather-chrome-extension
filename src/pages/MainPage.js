import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Weather from '../components/Weather';
import HourlyForecast from '../components/HourlyForecast';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const MainPage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <div className="weatherWrapper">
                <Weather />
            </div>
            <Divider />
            <div className="forecastTitle">
                <Typography variant="body1" component="div">
                    Next 5 Hours
                </Typography>
            </div>
            <div className="hourlyList">
                {[...Array(5)].map((el, index) => <HourlyForecast key={ index } hour={ index } />)}
            </div>
        </div>
    )
}

export default MainPage;