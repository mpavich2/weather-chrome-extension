import React from 'react';
import { WiHumidity } from 'weather-icons-react';

const HumidityDetails = (props) => {
    return (
        <div className="items">
            <WiHumidity size={ 25 } /> { props.humidity }%
        </div>
    )
}

export default HumidityDetails;