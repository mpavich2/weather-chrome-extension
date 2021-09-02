import React from 'react';
import Header from '../components/Header';
import DailyForecastList from '../components/dailypage/DailyForecastList';

const DailyPage = () => {
    return (
        <div>
            <Header />
            <DailyForecastList />
        </div>
    )
}

export default DailyPage;