import React from "react";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import "./Works.css";
const Works = () => {
  return (
    <div className="works">
      <div className="serv-left">
        <span>Works for All these</span>
        <span>Brannds & Clients</span>
        <span>
          Lorem ipsum dolor sit amequuntur <br />
          rerum ipsam porro deserunt nostrum nobis distinctio.
        </span>
        <a href="https://www.linkedin.com/in/muhammad-shoaib1319/">
          <button className="button s-button">Hire me</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="main-circle">
          <div className="secCircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="secCircle">
            <img src={Upwork} alt="" />
          </div>
        </div>
        <div className="backCircle blueCircle"></div>
        <div className="backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
