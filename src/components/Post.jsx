import React from "react";
import "../components/Post.scss";
import Slider from "react-slick";
import post1 from "../img/post1.jpg";
import post2 from "../img/post2.jpg";
import post3 from "../img/post3.jpg";
import post4 from "../img/post4.jpg";
import post5 from "../img/post5.jpg";
import post6 from "../img/post6.jpg";
import post7 from "../img/post7.jpg";
import post8 from "../img/post8.jpg";
import post9 from "../img/post9.jpg";
import post10 from "../img/post10.jpg";
import post11 from "../img/post11.jpg";
import post12 from "../img/post12.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Post = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  
  return (
     <div id="post">
        <Slider {...settings}>
          <div className="post_box">
            <img src={post1} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post2} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post3} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post4} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post5} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post6} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post7} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post8} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post9} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post10} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post11} alt="post" className="post_img"/>
          </div>
          <div className="post_box">
          <img src={post12} alt="post" className="post_img"/>
          </div>
        </Slider>
     </div>


   
  );
};


export default Post;

