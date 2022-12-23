import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import LoginPageSlice from './app/slices/authencation/login/login-page-slice';

const middleware = [...getDefaultMiddleware({serializableCheck: false})];

export default configureStore({
    reducer: {
        LoginPageSilce: LoginPageSlice
    },
    // devTools: process.env.REACT_APP_ALLOW_REDUX_DEVTOOLS === 'true',
    middleware
})