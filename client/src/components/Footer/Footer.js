import "./Footer.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Footer = () => {
  return (
    <div className="footer">
      <AmplifySignOut />
      <hr />
      <h3 style={{ textAlign: "center" }}>
        &copy; Copyright 2021, Date4Real Qi Feng, Alex Gold, Alexander Marzullo,
        Jalyn Campbell, Jeff Woda
      </h3>
      <hr />
    </div>
  );
};

export default Footer;
