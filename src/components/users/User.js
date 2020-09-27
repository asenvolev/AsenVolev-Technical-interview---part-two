import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { UserProp } from './UserProp';
import { selectUserById } from "./usersSlice";

export const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId));
    const [updateUser, setUpdateUser] = useState(user);

    const onUserPropChanged = e => {
        const prop = e.target.id;
        const value = e.target.value;
        setUpdateUser()
    }

    const userProps = Object.keys(user).map(prop=>(

        <UserProp key={prop} objKey={prop} objValue={user[prop]} onObjValueChanged={onUserPropChanged}/>
    ))



    return (
        <section>
            <form>
                {userProps}
            </form>
            <button type="button" >
                Save Post
            </button>
        </section>
    )
}