import {createSlice} from "@reduxjs/toolkit";


export const LoginPageSlice = createSlice({
    name: "LoginPageSlice",
    initialState:{
        paramFilter: {},
        isSubmit: false
    },
    reducers: {
        updateParamFilter: (state, {payload}) => {
            state.paramFilter = payload;
        }
    }
})

export default LoginPageSlice.reducer