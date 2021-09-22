import { createSlice } from "@reduxjs/toolkit";

export const LocationSlice = createSlice({
    name: 'location',
    initialState: null,
    reducers: {
        changeLocation: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeLocation } = LocationSlice.actions;

export default LocationSlice.reducer;
