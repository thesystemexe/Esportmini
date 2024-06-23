import React from "react";
import "./styles.css";
import Button from "../Button";
import logo from "../../../Assests/logo1.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <motion.img className="logo-img" src={logo} />
        <div className="links">
          <a href="/" className="link">
            Home
          </a>
          <a href="http://" className="link">
            News
          </a>
          <a href="/Tournament" className="link">
            Tournament
          </a>
          <a
            href="
          "
            className="login-btn"
          >
            <a
              className="link"
              href="/addtour
            "
            >
              <a className="link" href="/tourlist">
                list
              </a>
              Add
            </a>
            <Button text={"Login"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
