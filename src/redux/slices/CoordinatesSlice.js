import { createSlice } from "@reduxjs/toolkit";

export const CoordinatesSlice = createSlice({
    name: 'coordinates',
    initialState: null,
    reducers: {
        changeCoordinates: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeCoordinates } = CoordinatesSlice.actions;

export default CoordinatesSlice.reducer;
