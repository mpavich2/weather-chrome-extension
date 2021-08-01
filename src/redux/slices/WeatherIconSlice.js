import { createSlice } from "@reduxjs/toolkit";

export const WeatherIconSlice = createSlice({
    name: 'weatherIcon',
    initialState: null,
    reducers: {
        changeWeatherIcon: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeWeatherIcon } = WeatherIconSlice.actions;

export default WeatherIconSlice.reducer;
