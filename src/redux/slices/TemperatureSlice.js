import { createSlice } from "@reduxjs/toolkit";

export const TemperatureSlice = createSlice({
    name: 'temperature',
    initialState: 0,
    reducers: {
        changeTemperature: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeTemperature } = TemperatureSlice.actions;

export default TemperatureSlice.reducer;
