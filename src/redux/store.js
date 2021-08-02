import { configureStore } from "@reduxjs/toolkit";
import WeatherIconReducer from './slices/WeatherIconSlice';
import LocationReducer from './slices/LocationSlice';
import TemperatureReducer from './slices/TemperatureSlice';
import WeatherReducer from './slices/WeatherSlice';

export default configureStore({
    reducer: {
        weatherIcon: WeatherIconReducer,
        location: LocationReducer,
        temperature: TemperatureReducer,
        weather: WeatherReducer,
    },
});
