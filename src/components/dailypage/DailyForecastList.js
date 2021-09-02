import React from 'react';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import WeatherIcon from '../WeatherIcon';
import Typography from '@material-ui/core/Typography';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';


const DailyForecastList = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const getDayOfWeek = (datetime, timezone) => {
        const dayIndex = new Date(datetime*1000+(timezone*1000)).getDay();
        return days[dayIndex];
    }

    const getDate = (datetime, timezone) => {
        return new Date(datetime*1000+(timezone*1000)).toLocaleDateString('default', { month: 'long', day: 'numeric' });
    }

    return (
        <div>
            {props.daily.map((el, index) => 
            <div>
                <div key={ index } className="dailyEntry">
                    <div className="leftEntry">
                        <WeatherIcon iconId={ el.weather[0].id } size={ 70 } />
                        <Typography variant="h4" component="div">
                            { Math.round(el.temp.day) }°F
                        </Typography>
                        <div className="minMaxTempWrapper">
                            <div className="minMaxTemp">
                                <ArrowDropUp />
                                <Typography variant="subtitle1" component="div">
                                    { Math.round(el.temp.max) }°F
                                </Typography>
                            </div>
                            <div className="minMaxTemp">
                                <ArrowDropDown />
                                <Typography variant="subtitle1" component="div">
                                    { Math.round(el.temp.min) }°F
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="rightEntry">
                        <Typography variant="subtitle1" component="div">
                            { getDayOfWeek(el.dt, props.weather.timezone) }
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            { getDate(el.dt, props.weather.timezone) }
                        </Typography>
                    </div>
                </div>
                <Divider />
            </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        daily: state.daily,
        weather: state.weather
    }
}

export default connect(mapStateToProps)(DailyForecastList);