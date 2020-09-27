import { read } from "../../api/fetchWrapper";
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await read('users');
    return response;
})
export const fetchUserPosts = createAsyncThunk('users/fetchUserPosts', async (userId) => {
  const response = await read(`posts?userId=${userId}`);
  return {userId, posts:response};
})

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
      userUpdated(state, action){
        const { id } = action.payload;
        const existingUser = state.entities[id];
        if (existingUser) {
            state.entities[id] = {...action.payload}
        }
      },
    },
    extraReducers: {
        [fetchUsers.fulfilled]: usersAdapter.setAll,
        [fetchUserPosts.fulfilled]: (state, action) => {
          const {userId, posts} = action.payload;
          const existingUser = state.entities[userId];
          if (existingUser) {
            state.entities[userId] = {...existingUser, posts:posts}
          }
        }
    }
});

export const {userUpdated} = usersSlice.actions;

export default usersSlice.reducer;

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById
  } = usersAdapter.getSelectors(state => state.users)