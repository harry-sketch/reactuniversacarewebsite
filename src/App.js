import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import After from "./components/After";
import Programs from "./components/Programs";
import Health from "./components/Health";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import Showcase from "./components/Showcase";
import Post from "./components/Post";
import Careviger from "./components/Careviger";
import Beforefooter from "./components/Beforefooter";
import Reviews from "./components/Reviews";


const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 20% auto;
    border-color: blue;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <HashLoader
          color={"#000"}  
          loading={loading}
          css={override}
          size={100}
        />
      ) : (
        <>
          <Header />
          <Navbar />
          <Showcase/>
          <After />
          <Intro/>
          <Careviger/>
          <Programs />
          <Post/>
          <Reviews/>
          <Health/>
          <Beforefooter/>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
