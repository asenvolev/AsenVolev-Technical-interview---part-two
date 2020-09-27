import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../components/users/usersSlice';
import postsReducer from '../components/posts/postsSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer
    }
});