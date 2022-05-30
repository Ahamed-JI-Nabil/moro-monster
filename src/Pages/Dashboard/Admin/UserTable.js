import React from 'react';

const UserTable = ({ user }) => {

    const makeAdmin = () => {
        fetch(`https://young-harbor-42670.herokuapp.com/users/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <tr>
            <td>{user.email}</td>
            <td>{user?.displayName}</td>
            <td>{user.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs ">Make Admin</button>}</td>
        </tr>
    );
};

export default UserTable;