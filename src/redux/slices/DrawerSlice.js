import { createSlice } from "@reduxjs/toolkit";

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState: false,
    reducers: {
        changeDrawerOpen: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeDrawerOpen } = DrawerSlice.actions;

export default DrawerSlice.reducer;
