import { createSlice } from "@reduxjs/toolkit";

export const MeasurementUnitsSlice = createSlice({
    name: 'units',
    initialState: '°F',
    reducers: {
        changeMeasurementUnits: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeMeasurementUnits } = MeasurementUnitsSlice.actions;

export default MeasurementUnitsSlice.reducer;
