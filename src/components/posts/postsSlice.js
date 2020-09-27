import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
    }
});

export default postsSlice.reducer;