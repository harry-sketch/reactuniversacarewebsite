import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../components/Navbar.scss";

const Navbar = () => {
  const [inMobile, setInMobile] = useState(false);
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img src={logo} alt="logo" className="logo__img" />
        </div>
        <ul
          className={inMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => {
            setInMobile(false);
          }}
        >
          <li className="list-item">
            <Link to="about">About </Link>
          </li>
          <span>|</span>
          <li className="list-item">
            <Link to="services">Services </Link>
          </li>
          <span>|</span>
          <li className="list-item">
            <Link to="resources">Resources </Link>
          </li>
          <span>|</span>
          <li className="list-item">
            <Link to="careers" className="active">
              Careers
            </Link>
          </li>
          <span className="list_span">|</span>
          <li className="list-item">
            <Link to="Home-care-heroes">Home Care Heroes </Link>
          </li>
          <span>|</span>
          <li className="list-item">
            <Link to="contact">Contact </Link>
          </li>
          <span>|</span>
          <div id="phone">
            <i className="fas fa-phone-alt"></i>
            <div className="phone_text">
              <p>866-986-3356</p>
            </div>
          </div>
        </ul>

        <div
          id="hamburger"
          onClick={() => {
            setInMobile(!inMobile);
          }}
        >
          {inMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
