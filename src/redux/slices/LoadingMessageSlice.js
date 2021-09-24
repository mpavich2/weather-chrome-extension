import { createSlice } from "@reduxjs/toolkit";

export const LoadingMessageSlice = createSlice({
    name: 'loadingMessage',
    initialState: null,
    reducers: {
        changeLoadingMessage: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeLoadingMessage } = LoadingMessageSlice.actions;

export default LoadingMessageSlice.reducer;
