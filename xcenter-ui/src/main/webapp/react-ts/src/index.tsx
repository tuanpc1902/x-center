import React from "react";
import ReactDOM from "react-dom/client";
import App from './app/app';
import {Provider} from "react-redux";
import store from "./store";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <div className='x-center'>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <App />
                    <h2 className="connect"></h2>
                </BrowserRouter>
            </I18nextProvider>
        </Provider>
    </div>
);