import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRepositories } from "../../services/api"

interface Repository {
    id: number,
    name: string,
    html_url: string
}

interface RepositoryState {
    repositories: Repository[],
    loading: boolean,
    error: string | null
}

const initialState: RepositoryState = {
    repositories: [],
    loading: false,
    error: null
}

export const fetchRepositories = createAsyncThunk('repositories/fetchRepositories', async (username: string, config) => {
    console.log('Estado atual: ', config.getState());
    
    const repositories = await getRepositories(username);

    return repositories;
});

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRepositories.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRepositories.fulfilled, (state, action) => {
            state.loading = false;
            state.repositories = action.payload;
        });
        builder.addCase(fetchRepositories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Erro ao buscar repositórios';
            state.repositories = [];
        });
    }
});

export default repositoriesSlice.reducer