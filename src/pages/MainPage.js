import React from "react";
import MainHeader from "../components/mainpage/MainHeader";
import SearchBar from "../components/mainpage/SearchBar";
import Weather from "../components/mainpage/Weather";
import HourlyForecast from "../components/mainpage/HourlyForecast";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Loading from "../components/mainpage/Loading";
import { connect } from "react-redux";

const MainPage = (props) => {
    const determineErrorOrLoadingState = () => {
        if (props.weather.cod === "404") {
            return (
                <Typography variant="h2" component="div" sx={{ fontSize: 25 }}>
                    City Not Found
                </Typography>
            );
        } else if (
            props.weather.weather === null ||
            props.weather.weather === undefined ||
            props.loadingMessage
        ) {
            return <Loading message={props.loadingMessage} />;
        }
    };

    if (
        props.weather.cod === "404" ||
        props.weather.weather === null ||
        props.weather.weather === undefined ||
        props.loadingMessage
    ) {
        return (
            <div>
                <MainHeader />
                <SearchBar />
                <div className="errorWrapper">{determineErrorOrLoadingState()}</div>
            </div>
        );
    }

    return (
        <div>
            <MainHeader />
            <SearchBar />
            <div className="weatherWrapper">
                <Weather />
                <Link to="/report" style={{ textDecoration: "none" }} exact="true">
                    <Button variant="outlined" style={{ margin: "10px", width: "250px" }}>
                        Full Report
                    </Button>
                </Link>
                <div>
                    <Link to="/daily" style={{ textDecoration: "none" }} exact="true">
                        <Button
                            variant="outlined"
                            style={{ width: "120px", marginRight: "5px" }}
                        >
                            Daily
                        </Button>
                    </Link>
                    <Link
                        to="/airquality"
                        style={{ textDecoration: "none" }}
                        exact="true"
                    >
                        <Button
                            variant="outlined"
                            style={{ width: "120px", marginLeft: "5px" }}
                        >
                            Air Quality
                        </Button>
                    </Link>
                </div>
            </div>
            <Divider />
            <div className="forecastTitle">
                <Typography variant="body1" component="div">
                    Next 5 Hours
                </Typography>
            </div>
            <div className="hourlyList">
                {[...Array(5)].map((el, index) => (
                    <HourlyForecast key={index} hour={index} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        loadingMessage: state.loadingMessage,
    };
};

export default connect(mapStateToProps)(MainPage);
