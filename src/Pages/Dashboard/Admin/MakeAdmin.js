import React from 'react';
import useAllUsers from '../../../Hooks/useAllUsers';
import UserTable from './UserTable';

const MakeAdmin = () => {

    const [users] = useAllUsers([])

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