import { createContext, useEffect, useState } from 'react'

export const UserApiContex = createContext();

export const UserApiProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching', error);
            } finally {
                setLoading(false);
            }

        }

        fetchUser();

    }, [])


    return (
        <UserApiContex.Provider value={{users,loading}}>
            {children}
        </UserApiContex.Provider>

    )
}



