import { createSlice } from "@reduxjs/toolkit";

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        changeWeather: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeWeather } = WeatherSlice.actions;

export default WeatherSlice.reducer;
