import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import WomanIcon from "@material-ui/icons/PregnantWoman";
import ManIcon from "@material-ui/icons/Accessibility";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
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

      <a href="/filter/male">
        <IconButton>
          <ManIcon fontSize="large" className="header_icon" />
        </IconButton>
      </a>

      <a href="/filter/female">
        <IconButton>
          <WomanIcon fontSize="large" className="header_icon" />
        </IconButton>
      </a>
    </div>
  );
}

export default Header;
