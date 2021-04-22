import Aos from "aos";
import React, { useEffect } from "react";
import "../components/Health.scss";
import healthimg from "../img/health.png";
import "aos/dist/aos.css";

const Health = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="health" data-aos="fade">
      <div className="health_content">
        <h2 className="health_head"> We do whatever it makes to</h2>
        <h2 className="health_head  health_secondary">
        
          bring your peace of mind
        </h2>
        <button>Request an appointment</button>
      </div>

      <img
        src={healthimg}
        alt="health"
        className="health_img"
    
        
      />

      <div className="health_icon">
        <i className="fas fa-chevron-circle-up fa-2x"></i>
      </div>
    </div>
  );
};

export default Health;
