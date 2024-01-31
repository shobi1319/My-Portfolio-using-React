import React from 'react';
import "./Servies.css"
import Heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from "./Resume.pdf"
import { useContext } from "react";
import { themeContext } from "../../Context";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='services'>
      <div className="serv-left">
       <span style={{ color: darkMode ? "white" : "" }}>My Valuable</span>
       <span>Servies</span>
       <span>I provide the web solutions and well designed <br />
        responsive  websites for your business.</span>
        <a href={Resume} download ><button className="button s-button">
            Downlaod CV
        </button></a>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>
      <div className="serv-cards">
      <div style={{left:'14rem'}}>
        <Card 
        emoji={Heartemoji}
        heading={'Design'}
        detail={"Figma,Sketch, Photoshop, Adobe, Adobe xd"}
        />
        </div>
        <div style={{ top:'12rem' , left:'-4rem'}}>
        <Card 
        emoji={Glasses}
        heading={'Developer'}
        detail={"HTML, Node.js, JavaScript, React, Python"}
        />
      </div>
      <div style={{ top:'19rem' , left:'12rem'}}>
        <Card 
        emoji={Humble}
        heading={'Developer'}
        detail={"CSS, Bootstrap, Tailwind, React"}
        />
      </div>
      <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
      </div>
 
  );
};

export default Services;