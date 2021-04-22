import React,{useEffect} from 'react';
import "../components/Careviger.scss";
import care1 from "../img/care1.png";
import care2 from "../img/care2.png";
import care3 from "../img/care3.png";
import care4 from "../img/care4.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Careviger = () => {
       useEffect(() => {
           Aos.init({duration:2000});
           
       }, [])   

    return (
        <div id="careviger" data-aos="fade" >
        <h2>How We Find <span> Best Careviger</span> For You</h2>

        <div id="cards_care" >
            <div className="box">
            <img src={care3} alt="care" className="care_img-1"/>
            <h4 className="box-heading box-head">1.Initial</h4>
            <h4 className="box-heading">Consultation</h4>
            <p className="box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
            </div>
            <div className="box">
            <img src={care1} alt="care" className="care_img-2"/>
            <h4 className="box-heading box-head">2. Customized</h4>
            <h4 className="box-heading">Care Plan</h4>
            <p className="box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
        
            </div>
            <div className="box">
            <img src={care2} alt="care" className="care_img-3"/>
            <h4 className="box-heading box-head">3.Caregiver</h4>
            <h4 className="box-heading"> Matching</h4>
            <p className="box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
            
            </div>
            <div className="box">
            <img src={care4} alt="care" className="care_img-4"/>
              <h4 className="box-heading box-head">4.Ongoing Support</h4>
              <h4 className="box-heading">& Supervision</h4>
              <p className="box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
              
            </div>
        </div>
            
        </div>
    )
}

export default Careviger;
