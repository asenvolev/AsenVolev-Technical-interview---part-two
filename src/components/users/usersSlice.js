import { read } from "../../api/fetchWrapper";
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await read('users');
    return response;
  })

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: usersAdapter.setAll
    }
});

export default usersSlice.reducer;

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById
  } = usersAdapter.getSelectors(state => state.users)