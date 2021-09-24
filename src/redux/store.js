import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from './slices/LocationSlice';
import WeatherReducer from './slices/WeatherSlice';
import CoordinatesReudcer from './slices/CoordinatesSlice';
import HourlyReducer from './slices/HourlySlice';
import DailyReducer from './slices/DailySlice';
import AirQualityReducer from './slices/AirQualitySlice';
import LocationOptionsReducer from "./slices/LocationOptionsSlice";
import LoadingMessageReducer from './slices/LoadingMessageSlice';

export default configureStore({
    reducer: {
        location: LocationReducer,
        weather: WeatherReducer,
        coordinates: CoordinatesReudcer,
        hourly: HourlyReducer,
        daily: DailyReducer,
        airQuality: AirQualityReducer,
        locationOptions: LocationOptionsReducer,
        loadingMessage: LoadingMessageReducer
    },
});
