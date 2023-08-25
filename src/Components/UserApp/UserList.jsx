import React from 'react'
import SingleUser from './SingleUser'
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=5");
        setUsers(response.data.results);
    }

    useEffect(() => {
        fetchUsers();
    }, [])



    return (
        <div className="user-list">
            <ul>
                {users.map((user) => (
                    <li style={{ listStyle: 'none' }} key={user.login.uuid}>
                        <SingleUser user={user} />
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default UserList
