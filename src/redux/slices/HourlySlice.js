import { createSlice } from "@reduxjs/toolkit";

export const HourlySlice = createSlice({
    name: 'hourly',
    initialState: null,
    reducers: {
        changeHourlyForecast: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeHourlyForecast } = HourlySlice.actions;

export default HourlySlice.reducer;
