import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <div className='mt-14 max-w-xl mx-auto'>
                <div className="overflow-x-auto mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map(user => <UserTable
                                    key={user._id}
                                    user={user}
                                ></UserTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;