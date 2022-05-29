import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-rose-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48">
                    <li className='hover:text-rose-500'><Link to="/dashboard">My Profile</Link></li>
                    <li className='hover:text-rose-500'><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li className='hover:text-rose-500'><Link to="/dashboard/addreview">Add A Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;