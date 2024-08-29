import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = (props) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex bg-gray-700 w-100' id='navbar' >
            <div className='ml-20' id='logo'>
                <h1 className=' text-3xl font-bold text-richblack-100' >DigiRescue</h1>
            </div>
            
            <nav>
            
                <ul className='flex gap-7  font-bold text-lg text-richblack-100' id='navigate'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/Emergencies">Services</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                
                
            </nav>

            <div className='flex m5-2 mr-2 text-lg gap-2' id='login'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Login
                        </button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to="/signUp">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[9px] mr-1 rounded-[8px] border border-richblack-700'>
                            Sign Up
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/logout">
                        <button>
                            Log Out
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
        
</div>
            {/* <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
                </div> */}
        </div>
    )
}

export default Navbar