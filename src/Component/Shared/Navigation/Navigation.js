import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import logo from '../../../favicon.ico'
const Navigation = () => {
    const { user, signout } = useContext(AuthContext)
    return (
        <div className="navbar bg-white dark:bg-black text-black dark:text-white">
            <div className="navbar-start">
                <div className="dropdown bg-white dark:bg-black text-black dark:text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-black text-black dark:text-white rounded-box w-52  border border-2">
                        <Link to="/home" className='mt-2 w-100 btn btn-ghost'>Home</Link>
                        <li tabIndex={0}>
                            <Link to="/courses" className='btn btn-ghost'>
                                Courses
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                            </Link>
                            {/* <ul className="p-2 border border-2 w-52 ml-2">
                                <Link to="/courses/1" className='btn btn-ghost'>Php Tutorial</Link>
                                <Link to="/courses/2" className='btn btn-ghost'>React Tutorial</Link>
                            </ul> */}
                        </li>
                        <Link to="/home" className='btn btn-ghost'>Blog</Link>
                        <Link to="/faq" className='btn btn-ghost'>FAQ</Link>
                        {
                            user && user.uid ? <Link className="btn btn-ghost" onClick={signout}>Logout</Link> :
                                <Link to="/login" className="btn btn-ghost">Login</Link>
                        }

                        <Link to="/signup" className='btn btn-ghost'>Signup</Link>
                    </ul>
                </div>
                <span><img src={logo} style={{ width: '65px', height: '65px' }} alt="" /></span>
                <p className="btn btn-ghost normal-case text-xl">Digital Cloud</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to="/home" className='mr-4 btn btn-ghost'>Home</Link>
                    <li tabIndex={0}>
                        <Link to="/courses" className='mr-4 btn btn-ghost'>
                            Courses
                            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> */}
                        </Link>
                        {/* <ul className="p-2 border border-2 w-52">
                            <Link to="/courses/1" className=' btn btn-ghost'>Php Tutorial</Link>
                            <Link to="/courses/2" className='mt-4 btn btn-ghost'>React Tutorial</Link>
                        </ul> */}
                    </li>
                    <Link to="/blog" className='mr-4 btn btn-ghost'>Blog</Link>
                    <Link to="/faq" className='mr-4 btn btn-ghost'>FAQ</Link>
                    {
                        user && user.uid ? <Link className="btn btn-ghost" onClick={signout}>Logout</Link> :
                            <Link to="/login" className="btn btn-ghost">Login</Link>
                    }
                    <Link to="/signup" className='mr-4 btn btn-ghost'>Signup</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.uid ? <div title={user.displayName}><img src={user.photoURL} alt="" style={{ width: '25px', height: '25px' }} /></div> : null
                }

                <div className="">
                    <ToggleTheme />
                </div>
            </div>
        </div>
    );
};

export default Navigation;