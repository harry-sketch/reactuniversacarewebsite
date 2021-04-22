import React, { useEffect } from "react";
import "../components/Reviews.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="reviews" data-aos="fade">
      <Slider {...settings}>
        <div>
          <div
            className="review_first"
            
            
          >
            <h2>5.0</h2>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <div>
              <p> 2,054 verified customers</p>
              <p>
                reviews by <strong>Google.</strong>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="review_second"
            
            
          >
            <h3>Alvin Stanley</h3>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <p className="review_para">
              Great company to work for! This organization cares for its team of
              caregivers, office employees, and clients. There is always someone
              available to pick up the phone when you need help.
            </p>
          </div>
          <Link to="" className="review_link">
            See All Reviews <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div>
          <div
            className="review_second"
            
            
          >
            <h3>Alvin Stanley</h3>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <p className="review_para">
              Great company to work for! This organization cares for its team of
              caregivers, office employees, and clients.
            </p>
          </div>
        </div>
        <div>
          <div
            className="review_second"
            
            
          >
            <h3>Alvin Stanley</h3>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <span className="fas fa-star checked"></span>
            <p className="review_para">Awesome!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
