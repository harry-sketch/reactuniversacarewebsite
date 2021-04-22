import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../components/Intro.scss";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";
import card5 from "../img/card5.png";
import card6 from "../img/card6.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="intro">
        <div
          class="section"
          data-aos="fade-up"
        
          
        >
          <h4>Your peace of mind is</h4>
          <h3>
            <strong>our number one priority.</strong>
          </h3>
          <div class="section_empty"></div>
          <p>
            UniversaCare offers a range of services for in-home care. We are
            your partners in care, and work with you to come up with a plan of
            action.
          </p>
        </div>
        <div class="section-side-top" data-aos="fade-up">
          <img src={card1} alt="intro" />
          <h4 className="same_head section_head">Hourly Home Care</h4>
          <p class="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div
          class="section-side-bottom"
          data-aos="fade-up"
          
        >
          <img src={card2} alt="intro" />
          <h4 className="same_head">Personal Care</h4>
          <p class="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div
          class="section-side-bottom-b"
          data-aos="fade-up"
          
        >
          <img src={card3} alt="intro" />
          <h4 className="same_head"> Private Nursing</h4>
          <p class="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
      </div>

      <div id="intro_section">
        <div class="intro_card" data-aos="fade-up">
          <img src={card4} alt="" />
          <h4 className="same_head">Respite Care</h4>
          <p className="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div class="intro_card" data-aos="fade-up">
          <img src={card5} alt="intro" />
          <h4 className="same_head">Life-in Aid</h4>
          <p className="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div class="intro_card" data-aos="fade-up">
          <img src={card4} alt="intro" />
          <h4 className="same_head">Memory Care</h4>
          <p className="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div class="intro_card" data-aos="fade-up">
          <img src={card1} alt="card" />
          <h4 className="same_head">Memory Care</h4>
          <p className="same_para">
            4x higher coverage limit than traditional policies for computers and
            home office equipment.{" "}
          </p>
          <Link to="" className="intro_link">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
        <div class="intro_card" data-aos="fade-up">
          <img src={card6} alt="intro" />
          <h4 className="last_head">Do you need support?</h4>
          <p className="same_para">We glad to help!</p>
          <button className="intro_button">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
