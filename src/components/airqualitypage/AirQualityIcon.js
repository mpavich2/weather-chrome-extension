import React from 'react';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const AirQualityIcon = (props) => {
    const convertToIcon = (iconId) => {
        const fontSize = props.size || "large";
        switch (true) {
            case iconId === 1:
                return <SentimentSatisfiedAltIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
            case iconId === 2:
                return <SentimentSatisfiedIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
            case iconId === 3:
                return <SentimentNeutralIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
            case iconId === 4:
                return <SentimentDissatisfiedIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
            case iconId === 5:
                return <SentimentVeryDissatisfiedIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
            default:
                return <SentimentNeutralIcon className="svgIcon" fontSize={fontSize} color={props.color} />;
        }
    }

    return convertToIcon(props.iconId);
}

export default AirQualityIcon;