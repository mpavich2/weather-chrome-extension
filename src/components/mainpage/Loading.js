import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props) => {
    const message = props.message || 'Fetching Data';

    return (
        <div className="loadingWrapper">
            <CircularProgress />
            <p>{ message }</p>
        </div>
    )
}

export default Loading;