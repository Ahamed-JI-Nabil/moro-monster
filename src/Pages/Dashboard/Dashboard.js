import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {

    const [user] = useAuthState(auth)

    const [userRole, setUserRole] = useState([])

    const [isAdmin, setIsAdmin] = useState(userRole.role === 'admin' ? false : true)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserRole(data))
    }, [])



    return (
        <div className="drawer drawer-mobile h-fit">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-rose-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-white">
                    <li className='hover:text-rose-500'><Link to="/dashboard">My Profile</Link></li>
                    {isAdmin ?
                        <>
                            <li className='hover:text-rose-500'><Link to="/dashboard/addproduct">Add A Product</Link></li>
                            <li className='hover:text-rose-500'><Link to="/dashboard/allorders">Manage All Orders</Link></li>
                            <li className='hover:text-rose-500'><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                            <li className='hover:text-rose-500'><Link to="/dashboard/users">Make Admin</Link></li>
                        </>
                        :
                        <>
                            <li className='hover:text-rose-500'><Link to="/dashboard/myorders">My Orders</Link></li>
                            <li className='hover:text-rose-500'><Link to="/dashboard/addreview">Add A Review</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;