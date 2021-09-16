import { createSlice } from "@reduxjs/toolkit";

export const AirQualitySlice = createSlice({
    name: 'airQuality',
    initialState: null,
    reducers: {
        changeAirQuality: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeAirQuality } = AirQualitySlice.actions;

export default AirQualitySlice.reducer;
