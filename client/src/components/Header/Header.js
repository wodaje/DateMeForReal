import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <IconButton>
          <HomeIcon fontSize="large" className="header_icon" />
          Home
        </IconButton>
      </Link>

      <a href="/filter/male">
        <IconButton>
          <FaMale fontSize="large" className="header_icon" />
          Male
        </IconButton>
      </a>

      <a href="/filter/female">
        <IconButton>
          <FaFemale fontSize="large" className="header_icon" />
          Female
        </IconButton>
      </a>
      <Link to="/profile">
        <IconButton>
          <AccountCircleIcon fontSize="large" className="header_icon" />
          Profile
        </IconButton>
      </Link>

      <AmplifySignOut />
    </div>
  );
}

export default Header;
