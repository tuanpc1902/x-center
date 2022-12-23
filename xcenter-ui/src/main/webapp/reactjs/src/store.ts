import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CommonSlice from "./app/slices/common/common-slice";
import LoginPageSlice from "./app/slices/login/login-page-slice";

const middleware = [...getDefaultMiddleware({serializableCheck: false})];

export default configureStore({
    reducer: {
        CommonSlice: CommonSlice,
        LoginPageSlice: LoginPageSlice,
    },
    devTools: process.env.REACT_APP_ALLOW_REDUX_DEVTOOLS === 'true',
    middleware
})