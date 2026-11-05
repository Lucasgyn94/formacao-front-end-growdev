import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "..";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasksAdapter = createEntityAdapter<Task>();

const initialState = tasksAdapter.getInitialState();


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: tasksAdapter.addOne,
        removeTask: tasksAdapter.removeOne,
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.entities[action.payload]

            if (task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const { selectAll: selectAllTasks } = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;