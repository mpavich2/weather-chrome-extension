import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Weather from '../components/Weather';
import HourlyForecast from '../components/HourlyForecast';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const MainPage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <div className="weatherWrapper">
                <Weather />
                <Link to="/report" style={{ textDecoration: 'none' }} exact>
                    <Button variant="outlined" style={{ margin: '10px', width: '250px'}}>Full Report</Button>
                </Link>
                <div>
                    <Link to="/daily" style={{ textDecoration: 'none' }} exact>
                        <Button variant="outlined" style={{ width: '120px', marginRight: '5px'}}>Daily</Button>
                    </Link>
                    <Link to="/airquality" style={{ textDecoration: 'none' }} exact>
                        <Button variant="outlined" style={{ width: '120px', marginLeft: '5px'}}>Air Quality</Button>
                    </Link>
                </div>
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