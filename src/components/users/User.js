import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from '../posts/PostsList';
import { UserProp } from './UserProp';
import { fetchUserPosts, selectUserById, userUpdated } from "./usersSlice";

export const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId));
    const [updateUser, setUpdateUser] = useState(user);
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();

    const onUserPropChanged = e => {
        const prop = e.target.id;
        const value = e.target.value;
        if (prop.includes('.')) {
            let tokens = prop.split('.');
            let outerProp = tokens[0];
            let innerProp = tokens[1];
            if (outerProp === 'address') {
                setUpdateUser((prevState) => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        [innerProp]: value
                    },
                    company: {
                        ...prevState.company
                    }
                }));
            }
        } else {
            setUpdateUser((prevState) => ({
                ...prevState,
                [prop]: value
            }));
        }
    }

    const userProps = Object.keys(updateUser).map(prop=>(

        <UserProp key={prop} objKey={prop} objValue={updateUser[prop]} onObjValueChanged={onUserPropChanged}/>
    ))

    const togglePosts = () => setIsOpened(!isOpened);

    let userPosts;

    if (user.posts) {
        userPosts = <div>
                    <button onClick={togglePosts}>showHide</button>
                    {
                        isOpened && <PostsList posts={user.posts} />
                    }
                    </div>
    }
     

    const onSaveUserInfo = () => {
        dispatch(userUpdated(updateUser));
    }
    const onGetUsersPost = () => {
        dispatch(fetchUserPosts(user.id));
    }

    return (
        <section>
            <form>
                {userProps}
            </form>
            <button type="button" onClick={onSaveUserInfo}>
                Save User Info
            </button>
            <button type="button" onClick={onGetUsersPost}>
                Get user’s posts
            </button>
            <div >
                {userPosts}
            </div>
        </section>
    )
}