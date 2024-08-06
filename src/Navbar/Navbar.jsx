import React from "react";
import "./Navbar.css";
import IndigoLogo from "../assets/IndigoLogo.svg";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="Indigologo">
      <img src={IndigoLogo} alt="" />

      </div>
      <div className="header-name">
        Admin
      </div>
    </div>
  );
};
