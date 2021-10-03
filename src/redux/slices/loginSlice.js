import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged: false,
    logInError: false,
    username: ''
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {

        logIn: (state, action) => {
            state.logged = true;
            state.username = action.payload
        },
        logOut: (state) => {
            state.logged = false;
        },
        logInError: (state) => {
            state.logInError = true;
        },
        noLogInError: (state) => {
            state.logInError = false;
        }

    }
});

export const {logIn, logOut, logInError, noLogInError} = loginSlice.actions;
export default loginSlice.reducer;