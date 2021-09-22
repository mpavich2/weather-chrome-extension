import React from 'react';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { ReportData } from './ReportData';

const ReportList = (props) => {
    const data = ReportData(props.weather, props.hourly);

    return (
        <div className="fullReport">
            {data.map((el, index) => 
            <div key={ index }>
                <div className="reportEntry">
                    <Typography variant="body1" component="div">
                        { el.name }
                    </Typography>
                    <Typography variant="body1" component="div">
                        { el.data }
                    </Typography>
                </div>
                <Divider />
            </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        hourly: state.hourly
    }
}

export default connect(mapStateToProps)(ReportList);