import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import WcIcon from "@material-ui/icons/Wc";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton style={{ color: "#0d47a1" }}>
          <AccountCircleIcon fontSize="large" className="header_icon" />
          Profile
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton style={{ color: "red" }}>
          <WcIcon fontSize="large" className="header_home" />
          Matched
        </IconButton>
      </Link>

      <a href="/filter/male">
        <IconButton style={{ color: "#e91e63" }}>
          Likes
          <FavoriteIcon fontSize="large" className="header_icon" />
        </IconButton>
      </a>

      <a href="/filter/female">
        <IconButton style={{ color: "#8e24aa" }}>
          ForMe
          <FaceIcon fontSize="large" className="header_icon" />
        </IconButton>
      </a>
    </div>
  );
}

export default Header;
