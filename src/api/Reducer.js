import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./UserApi";


const initialState = {
    isLoading: false,
    error: null,
    user: null,
    screenName: 'Welcome',
}


const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.screenName = 'Login';
        }
    },
    extraReducers: (builder) => {
        builder
            //Chuc nang logIn
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                console.log("fullfilled=>>>>>>>>>", action.payload)
                state.user = action.payload;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                // console.log("rejected=>>>>>>>>", action.payload)
                // return action.payload();
            })
    }
});


export const { logout } = AppSlice.actions;
export default AppSlice.reducer;