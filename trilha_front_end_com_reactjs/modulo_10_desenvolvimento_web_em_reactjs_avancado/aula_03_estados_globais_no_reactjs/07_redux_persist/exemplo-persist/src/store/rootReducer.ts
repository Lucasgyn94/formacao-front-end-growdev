import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducers from './slices/tasksSlice';

const rootReducer = combineReducers({
    tasks: tasksReducers
});

export const persistedReducer = persistReducer({
    key: 'tasks',
    storage
}, rootReducer);


export default rootReducer;