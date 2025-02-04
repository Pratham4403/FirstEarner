import React from "react";
import {Link,useLocation} from "react-router-dom";
import { useState,useEffect } from "react";

export default function Menu(){

    const[selectedMenu,setSelectedMenu] = useState(0);
    const location = useLocation();
    //const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

    let handleSelectedMenu = (index)=>{
        setSelectedMenu(index);
    }

    // let handleisProfileDropdownOpen = ()=>{
    //     setIsProfileDropdownOpen(!isProfileDropdownOpen);
    // }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    useEffect(() => {
        switch (location.pathname) {
            case '/dashboard':
                setSelectedMenu(0); // Home route
                break;
            case '/dashboard/orders':
                setSelectedMenu(1); // Orders route
                break;
            case '/dashboard/holdings':
                setSelectedMenu(2); // Holdings route
                break;
            case '/dashboard/positions':
                setSelectedMenu(3); // Positions route
                break;
            case '/dashboard/funds':
                setSelectedMenu(4); // Funds route
                break;
            case '/dashboard/apps':
                setSelectedMenu(5); // Apps route
                break;
            default:
                setSelectedMenu(0); // Default to home route if no match
        }
    }, [location.pathname]); // Runs when location.pathname changes (after refresh)

    const logout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        window.location.href = 'http://localhost:3000'; // Redirect to the frontend home page
    };

    return(
        <div className="menu-container">
            <img src="onlyLogo.png" alt="Logo" style={{width : "40px",marginLeft:"14px"}}/>
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/dashboard" onClick={() => handleSelectedMenu(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/dashboard/orders" onClick={() => handleSelectedMenu(1)}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/dashboard/holdings" onClick={() => handleSelectedMenu(2)}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/dashboard/positions" onClick={() => handleSelectedMenu(3)}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/dashboard/funds" onClick={() => handleSelectedMenu(4)}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <button className="btn" onClick={logout}  style={{backgroundColor:"#FFB200",marginLeft:"0px"}}>Logout</button> {/* Logout button */}
                    </li>
                </ul>
                <hr/>
                {/* <div className="profile" onClick={handleisProfileDropdownOpen}>
                    {/* <div className="avatar">ZU</div> */}

                {/* </div> */}
            </div>
        </div>
    )
}