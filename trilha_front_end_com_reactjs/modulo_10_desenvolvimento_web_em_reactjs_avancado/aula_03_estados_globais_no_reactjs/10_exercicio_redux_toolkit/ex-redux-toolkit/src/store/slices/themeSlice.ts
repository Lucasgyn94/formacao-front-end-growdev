import { createSlice } from "@reduxjs/toolkit";

type ThemeMode = 'light' | 'dark';

const initialState = 'light' as ThemeMode;

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => (state === 'light' ? 'dark' : 'light')
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;