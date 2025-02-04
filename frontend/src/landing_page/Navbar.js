import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";


export default function Navbar(){

    const[selectedBar,setSelectedBar] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSelectedBar = (index)=>{
        setSelectedBar(index);
    }

    let normalBar = "normalBar";
    let highlightedBar = "highlightedBar";

    

    // Sync the selected bar with the current path when the location changes
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setSelectedBar(0); // Home route
                break;
            case '/signup':
                setSelectedBar(1); // Signup route
                break;
            case '/about':
                setSelectedBar(2); // About route
                break;
            case '/product':
                setSelectedBar(3); // Products route
                break;
            case '/pricing':
                setSelectedBar(4); // Pricing route
                break;
            case '/support':
                setSelectedBar(5); // Support route
                break;
            case '/login':
                setSelectedBar(6); // Support route
                break;
            default:
                setSelectedBar(0); // Default to home route if no match
        }
        window.scrollTo(0,0);
    }, [location.pathname]); // Runs when location.pathname changes (after refresh)

    return(
        <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor : "#FFFFF5"}}>
            <div class="container p-2">
                <Link class="navbar-brand" onClick={()=>{handleSelectedBar(0)}} to="/">
                    <img src="media/images/firstearner-removebg-preview.png" alt="FirstEarner Logo" style={{width : "60%"}}/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"505px"}}>
                    <form className="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item" onClick={()=>{handleSelectedBar(1)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" aria-current="page" to="/signup">
                                    <p className={selectedBar==1? highlightedBar : normalBar}>Signup</p>
                                </Link>
                            </li>
                            <li class="nav-item" onClick={()=>{handleSelectedBar(2)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" to="/about">
                                    <p className={selectedBar==2? highlightedBar : normalBar}>About</p>
                                </Link>
                            </li>
                            <li class="nav-item" onClick={()=>{handleSelectedBar(3)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" to="/product">
                                    <p className={selectedBar==3? highlightedBar : normalBar}>Products</p>
                                </Link>
                            </li>
                            <li class="nav-item" onClick={()=>{handleSelectedBar(4)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" to="/pricing">
                                    <p className={selectedBar==4? highlightedBar : normalBar}>Pricing</p>
                                </Link>
                            </li>
                            <li class="nav-item" onClick={()=>{handleSelectedBar(5)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" to="/support">
                                    <p className={selectedBar==5? highlightedBar : normalBar}>Support</p>
                                </Link>
                            </li>
                            <li class="nav-item" onClick={()=>{handleSelectedBar(6)}}>
                                <Link class="nav-link active text-muted" id="hoverEffect" to="/login">
                                    <p className={selectedBar==6? highlightedBar : normalBar}>
                                    Login
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}