import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { UserProp } from './UserProp';
import { selectUserById } from "./usersSlice";

export const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId));
    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [street, setStreet] = useState(user.address.street);
    const [suite, setSuite] = useState(user.address.suite);
    const [city, setCity] = useState(user.address.city);
    const [phone, setPhone] = useState(user.phone);
    const [website, setWebsite] = useState(user.website);

    const onNameChanged = e => setName(e.target.value)
    const onUsernameChanged = e => setUsername(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onStreetChanged = e => setStreet(e.target.value)
    const onSuiteChanged = e => setSuite(e.target.value)
    const onCityChanged = e => setCity(e.target.value)
    const onPhoneChanged = e => setPhone(e.target.value)
    const onWebsiteChanged = e => setWebsite(e.target.value)

    const onSaveUserInfo = () => {

    }

    return (
        <section>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={onNameChanged} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={onUsernameChanged} />
                </div>
                <div>
                    <label htmlFor="email">e-mail:</label>
                    <input type="text" id="email" name="email" value={email} onChange={onEmailChanged} />
                </div>
                <div>
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" name="street" value={street} onChange={onStreetChanged} />
                </div>
                <div>
                    <label htmlFor="suite">Suite:</label>
                    <input type="text" id="suite" name="suite" value={suite} onChange={onSuiteChanged} />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={city} onChange={onCityChanged} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={phone} onChange={onPhoneChanged} />
                </div>
                <div>
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" value={website} onChange={onWebsiteChanged} />
                </div>
            </form>
            <button type="button" onClick={onSaveUserInfo}>
                Save User Info
            </button>
        </section>
    )
}