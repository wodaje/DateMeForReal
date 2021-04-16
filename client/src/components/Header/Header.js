import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import WcIcon from '@material-ui/icons/Wc';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>

            <Link to="/profile">
                <IconButton>
                    <AccountCircleIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>

            <Link to="/">
                <IconButton>
                    <HomeIcon fontSize="large" className="header_home" />
                </IconButton>
            </Link>

            <Link to="/filter">
                <IconButton>
                    <WcIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>
        </div >
    )
}

export default Header;
