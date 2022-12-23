import React from 'react'
import { Provider } from "react-redux";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import store from "./store";
import App from "./app/app";
import reportWebVitals from "./reportWebVitals";
import i18n from "./i18";
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </I18nextProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();