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
    reducers: {
        userUpdated(state, action){
          const { id, name, username, email, street, suite, city, phone, website } = action.payload;
          const existingUser = state.entities[id];
          if (existingUser) {
              existingUser.name = name;
              existingUser.username = username;
              existingUser.email = email;
              existingUser.address.suite = suite;
              existingUser.address.street = street;
              existingUser.address.city = city;
              existingUser.phone = phone;
              existingUser.website = website;
          }
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled]: usersAdapter.setAll
    }
});

export default usersSlice.reducer;

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById
  } = usersAdapter.getSelectors(state => state.users)