import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { changeMeasurementUnits } from '../redux/slices/MeasurementUnitsSlice';
import { connect } from "react-redux";

const DrawerSettings = (props) => {
    const handleRadioGroupOnChange = (value) => {
        props.dispatch(
            changeMeasurementUnits(value)
        );
    }

    return (
        <div className="drawerSettingsWrapper">
            <FormControl component="fieldset">
                <FormLabel component="legend">Measurement Units</FormLabel>
                <RadioGroup defaultValue={ props.units } onChange={ (event, value) => handleRadioGroupOnChange(value) }>
                    <FormControlLabel value="°F" control={<Radio />} label="°F" />
                    <FormControlLabel value="°C" control={<Radio />} label="°C" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        units: state.units
    };
};

export default connect(mapStateToProps)(DrawerSettings);