import React from 'react';
import Header from '../components/Header';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const FullReportPage = (props) => {
    const data = [
        {
            "name": "Temperature",
            "data": Math.round(props.weather.main.temp) + "°F"
        },
        {
            "name": "High Temperature",
            "data": Math.round(props.weather.main.temp_min) + "°F"
        },
        {
            "name": "Low Temperature",
            "data": Math.round(props.weather.main.temp_max) + "°F"
        },
        {
            "name": "Accufeel",
            "data": Math.round(props.weather.main.feels_like) + "°F"
        },
        {
            "name": "UV Index",
            "data": props.hourly[0].uvi
        },
        {
            "name": "Humidity",
            "data": Math.round(props.weather.main.humidity) + "%"
        },
        {
            "name": "Precipitation",
            "data": props.weather?.rain?.["1hr"] ? props.weather?.rain?.["1hr"] + "mm" : 'No Rain'
        },
        {
            "name": "Cloud Cover",
            "data": props.weather?.clouds?.all ? props.weather?.clouds?.all + "%" : 'No Clouds'
        },
        {
            "name": "Wind Speed",
            "data": Math.round(props.weather.wind.speed)
        },
        {
            "name": "Wind Direction",
            "data": props.weather.wind.deg
        }
    ];

    return (
        <div>
            <Header />
            <div className="fullReport">
                {data.map((el, index) => 
                <div>
                    <div key={ index } className="reportEntry">
                        <p className="reportName">
                            <Typography variant="body1" component="div">
                                { el.name }
                            </Typography>
                        </p>
                        <p className="reportData">
                            <Typography variant="body1" component="div">
                                { el.data }
                            </Typography>
                        </p>
                    </div>
                    <Divider />
                </div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        hourly: state.hourly
    }
}

export default connect(mapStateToProps)(FullReportPage);