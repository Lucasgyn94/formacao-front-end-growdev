import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
    theme: themeReducer
});

export const persistedReducer = persistReducer({
    key: 'login',
    storage,
}, rootReducer);