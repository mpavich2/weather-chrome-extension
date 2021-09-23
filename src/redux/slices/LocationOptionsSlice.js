import { createSlice } from "@reduxjs/toolkit";

export const LocationOptionsSlice = createSlice({
    name: 'locationOptions',
    initialState: [],
    reducers: {
        changeLocationOptions: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeLocationOptions } = LocationOptionsSlice.actions;

export default LocationOptionsSlice.reducer;
