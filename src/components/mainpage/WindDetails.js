import React from 'react';
import { WiStrongWind } from 'weather-icons-react';

const WindDetails = (props) => {
    const convertUnits = () => {
        if (props.units === '°C') {
            return 'km/h';
        }
        return 'mi/h';
    }
    return (
        <div className="items">
            <WiStrongWind size={ 25 } /> { props.windSpeed } { convertUnits() }
        </div>
    )
}

export default WindDetails;