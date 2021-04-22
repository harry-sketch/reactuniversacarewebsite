import Aos from "aos";
import React, { useEffect } from "react";
import "../components/Programs.scss";
import img from "../img/programs.png";
import "aos/dist/aos.css";

const Programs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="program" data-aos="fade-up">
        <img
          src={img}
          alt="program"
          className="program_img"
          
          
        />

        <div
          className="program_content"
          
          
        >
          <h2> CHAP Accreditation and this line can be about this big</h2>
          <p>
            UniversaCare, LLC will provide the following home health care
            programs at flexible schedules
          </p>
          <p>and cost-friendly service rates. </p>
        </div>
      </div>
    </>
  );
};

export default Programs;
