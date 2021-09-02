import { createSlice } from "@reduxjs/toolkit";

export const DailySlice = createSlice({
    name: 'daily',
    initialState: null,
    reducers: {
        changeDailyForecast: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeDailyForecast } = DailySlice.actions;

export default DailySlice.reducer;
