import { configureStore } from '@reduxjs/toolkit'

import tasksSlice from '../store/slices/tasksSlice'; 

export const store = configureStore({
  reducer: {
    tasks: tasksSlice
    // outros reducers
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export type AppStore = typeof store