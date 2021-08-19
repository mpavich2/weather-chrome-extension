import React from 'react';
import Header from '../components/Header';
import { Divider } from '@material-ui/core';

const FullReportPage = () => {
    return (
        <div>
            <Header />
            <div className="fullReport">
                {[...Array(11)].map((el, index) => 
                <div key={ index }>
                    <p className="reportEntry">Temperature 70F</p>
                    <Divider />
                </div>)}
            </div>
        </div>
    )
}

export default FullReportPage;