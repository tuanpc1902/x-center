import {createSlice} from "@reduxjs/toolkit";

export const CommonSlice = createSlice({
    name: "CommonSlice",
    initialState: {
        titlePage: '',
        headerTitle: '',
        isShowModal: false
    },
    reducers: {
        updateTitlePage: (state, {payload}) => {
            state.titlePage = payload;
        },
        updateHeaderTitle: (state, {payload}) => {
            state.headerTitle = payload;
        },
        setShowModal: (state, {payload}) => {
            state.isShowModal = payload;
        }
    }
});

export default CommonSlice.reducer