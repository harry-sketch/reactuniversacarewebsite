import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Beforefooter.scss";
import bfoot from "../img/logo.png";
import bf1 from "../img/bf1.png";
import bf2 from "../img/bf2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Beforefooter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="beforefoot" data-aos="fade">
      <div className="first_div">
        <h4 className="bf_head">Headquarters</h4>
        <div className="empty"></div>
        <p className="first_para">246-50 57th Drive</p>
        <p className="first_para">Douglaston, NY 11362</p>
        <p className="first_para">hello@universacare.com</p>
        <p className="first_para">P:(718)224-3758</p>
        <p className="first_para">F:8777999065</p>
        <img src={bfoot} alt="foot" className="foot_img" />
      </div>
      <div className="first"  >
        <h4 className="bf_head">Services</h4>
        <div className="empty"></div>
        <ul className="footer_link">
          <li className="footer_item">
            <Link to="">
              
              <i className="far fa-circle"></i> Hourley Care
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Daily Care
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Hospital to Home
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Respite Care
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Specialized Care
            </Link>
          </li>
        </ul>
      </div>
      <div className="first" >
        <h4 className="bf_head">Company</h4>
        <div className="empty"></div>
        <ul className="footer_link">
          <li className="footer_item">
            <Link to="">
              
              <i className="far fa-circle"></i> About Us
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Locations
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Carevigers
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> News & Blog
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> Contact Us
            </Link>
            <Link to="">
              
              <i className="far fa-circle"></i> FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="first_div">
        <p className="paragraph">Sign up to receive the latest articles</p>
        <input type="email" placeholder="Your email address" />
        <button>Submit</button>
        <div>
          <img src={bf1} alt="before" className="bf_img" />
          <img src={bf2} alt="before" />
        </div>
        <div className="end">
          <p>Follow Us:</p>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Beforefooter;
