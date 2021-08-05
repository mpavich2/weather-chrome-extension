import React from 'react';
import { WiStrongWind } from 'weather-icons-react';

const WindDetails = (props) => {
    return (
        <div className="items">
            <WiStrongWind size={ 25 } /> { props.windSpeed } mi/h
        </div>
    )
}

export default WindDetails;