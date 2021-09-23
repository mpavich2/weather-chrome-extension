import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from './slices/LocationSlice';
import WeatherReducer from './slices/WeatherSlice';
import CoordinatesReudcer from './slices/CoordinatesSlice';
import HourlySlice from './slices/HourlySlice';
import DailySlice from './slices/DailySlice';
import AirQualitySlice from './slices/AirQualitySlice';
import LocationOptionsSlice from "./slices/LocationOptionsSlice";

export default configureStore({
    reducer: {
        location: LocationReducer,
        weather: WeatherReducer,
        coordinates: CoordinatesReudcer,
        hourly: HourlySlice,
        daily: DailySlice,
        airQuality: AirQualitySlice,
        locationOptions: LocationOptionsSlice
    },
});
