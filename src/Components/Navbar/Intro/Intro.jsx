import { React } from "react";
import "./Intro.css";
import Github from "../..//../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../..//../img/instagram.png";
import  Vector1 from "../..//../img/Vector1.png";
import  Vector2 from "../..//../img/Vector2.png";
import  Shoaib from "../..//../img/Shoaib.png";
import Thumbup from "../..//../img/thumbup.png"
import Crown from "../..//../img/crown.png"
import glassesimoji from "../..//../img/glassesimoji.png"
import FloatingDiv from "../../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hey! I am</span>
          <span>Muhammad Shoaib</span>
          <span>
            Frontend Developer with a passion for design and code to produce
            Quality work.
          </span>
        </div>
        <button className="button intro-b">Hire me</button>
        <div className="intro-icons">
          <a href="https://www.github.com/shobi1319">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="intro-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={Shoaib} alt="" />
      <img src={glassesimoji} alt="" />
      <div style={{top:'-4%' ,left:'68%'}}>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
      </div>
      <div style={{top:'18rem' ,left:'0rem'}}>
        <FloatingDiv image={Thumbup} txt1='Best' txt2='Developer Award' />
      </div>
      <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
      <div className="blur" style={{ top:"17rem" , widhth:"21rem",height: "21rem", left: "-9rem", background:"rgb(238 210 255)"}}></div>
      </div>
    </div>
  );
};
export default Intro;
