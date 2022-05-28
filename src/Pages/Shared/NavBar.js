import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {

    const [user,] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth)
    }

    const menuItems = <>
        <li><a href="/" className='hover:text-rose-500'>Item 1</a></li>
        {user ?
            <>
                <li><Link className="hover:text-rose-500" to='/dashboard'>Dashboard</Link></li>
                <li><p className='hover:text-rose-500 '><sup className=''>User</sup>{user?.displayName}</p></li>
                <li><Link className="hover:text-rose-500" onClick={handleSignOut} to='/login'>Logout</Link></li>
            </>
            :
            <li><Link className="hover:text-rose-500" to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar bg-base-100 lg:flex lg:flex-wrap lg:justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-3xl font-mono font-light ml-10 text-center">Moto<span className='text-rose-500'>Monster</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>

            <div className="navbar-end">
                <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>

    );
};

export default NavBar;