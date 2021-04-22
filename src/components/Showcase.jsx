import React from "react";
import "../components/Showcase.scss";
import show from "../img/showcase.jpg";

const Showcase = () => {
  return (
    <div id="showcase">
      <div className="show_content">
        <h1>The Future of Health</h1>
        <h1>Care is Home Care</h1>
        <p>Over a Decade of Trusted Care.</p>
        <button>Request an appointment</button>
      </div>
      <img src={show} alt="showcase" className="show_img" />
    </div>
  );
};

export default Showcase;
