import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

const getTime = (hours = 0) => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + hours);
    const shortTime = currentTime.toLocaleTimeString([], {timeStyle: 'short'});
    return shortTime;
}

const Clock = (props) => {
    const [time, setTime] = useState(getTime(props.hoursToAdd));
    const textVariant = props.variant || 'h5';

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getTime(props.hoursToAdd))
        }, 1000);

        const clear = () => {
            clearInterval(timer);
        }
        return clear;
    });

    return(
        <Typography variant={ textVariant } component="div">
            { time }
        </Typography>
    )
}

export default Clock;
