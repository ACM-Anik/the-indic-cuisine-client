import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="navbar bg-base-100 shadow-lg rounded px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className="navStyle" to="/">Home</NavLink></li>
                            <li><NavLink className="navStyle" to="/contact">Contact</NavLink></li>
                            <li><NavLink className="navStyle" to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                    <a className="normal-case text-4xl font-serif font-bold">The Indic Cuisine</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className="navStyle" to="/">Home</NavLink></li>
                        <li><NavLink className="navStyle" to="/contact">Contact</NavLink></li>
                        <li><NavLink className="navStyle" to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ?
                            <span className='flex items-center gap-5'>
                                {
                                    user.photoURL ?
                                        <div>
                                            <a
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={user?.displayName}
                                                data-tooltip-place="left"
                                                className="avatar">
                                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL} alt='profile' />
                                                </div>
                                            </a>
                                            <Tooltip id="my-tooltip" />
                                        </div>
                                        :
                                        <UserCircleIcon className="h-11 w-11 " />


                                }
                                <button className='btn rounded-lg md:px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]' onClick={handleLogOut}>sign Out</button>
                            </span>
                            :
                            <Link to="/login" className="btn rounded-lg md:px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;