import React, { useContext } from "react";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import "./Works.css";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="serv-left">
        <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
        <span>Brannds & Clients</span>
        <span>
          I have always work with my full <br />
          Dedication to provide best Outcome.
        </span>
        <a href="https://www.linkedin.com/in/muhammad-shoaib1319/">
          <button className="button s-button">Hire me</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="main-circle">
          <div className="secCircle">
           <a href="https://www.fiverr.com/shoaib_1319"> <img src={Fiver} alt="" /></a>
          </div>
          <div className="secCircle">
           <a href="https://www.facebook.com/shoaibkhan.mahar.7">
           <img src={Facebook} alt="" />
           </a>
          </div>
          <div className="secCircle">
           <a href="https://www.upwork.com/freelancers/~01420c0f140f1c96ca"> <img src={Upwork} alt="" /></a>
          </div>
        </div>
        <div className="backCircle blueCircle"></div>
        <div className="backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
