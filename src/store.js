import {client} from './api/index';
import * as api from './api/api'
import {configureStore} from '@reduxjs/toolkit';
import {invoicesReducer} from "./features/invoices/invoices-slice";
import {detailsReducer} from "./features/details/details-silce";

export const store = configureStore({
    reducer: {
        invoices: invoicesReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        thunk: {
            extraArgument: {
                client,
                api,
            },
        },
        serializableCheck: false,
    })
});
