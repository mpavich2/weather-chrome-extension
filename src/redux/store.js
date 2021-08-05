import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from './slices/LocationSlice';
import WeatherReducer from './slices/WeatherSlice';

export default configureStore({
    reducer: {
        location: LocationReducer,
        weather: WeatherReducer,
    },
});
