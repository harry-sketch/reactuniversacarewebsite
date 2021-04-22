import React from "react";
import "../components/Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <hr />
        <div className="postfooter-content">
          <p>
            Copyright {year} <span>Universacare </span>-All rights reserved.{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
