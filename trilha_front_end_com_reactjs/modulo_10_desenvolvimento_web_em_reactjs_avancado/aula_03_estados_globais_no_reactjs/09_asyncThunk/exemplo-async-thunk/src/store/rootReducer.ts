import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducers from './slices/tasksSlice';
import repositoriesReducer from './slices/repositoriesSlice';

const rootReducer = combineReducers({
    tasks: tasksReducers,
    repositories: repositoriesReducer
});

export const persistedReducer = persistReducer({
    key: 'tasks',
    storage
}, rootReducer);


export default rootReducer;