import React, { useContext } from 'react'
import { UserApiContex } from './UserApiContex'
import { FaUsers } from 'react-icons/fa';


const UserList = () => {
    const { users, loading } = useContext(UserApiContex);

    if (loading) return <p>Loading.....</p>

    console.log(users);
    
    return (
        <div>
            <h2><FaUsers />Users</h2>
            <ul>
                {users.map((usr) => (
                    <li key={usr.id}>
                        {usr.name} - {usr.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
