import axios from './api/index';
import * as api from './api/api'
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
    },
    devTools: true,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
});
