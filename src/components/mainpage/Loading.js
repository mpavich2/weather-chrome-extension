import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {

    return (
        <div className="loadingWrapper">
            <CircularProgress />
            <p>Fetching Data</p>
        </div>
    )
}

export default Loading;