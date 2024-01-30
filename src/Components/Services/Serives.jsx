import React from 'react';
import "./Servies.css"
import Heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from "./Resume.pdf"
const Services = () => {
  return (
    <div className='services'>
      <div className="serv-left">
       <span>My Valuable</span>
       <span>Servies</span>
       <span>Lorem ipsum dolor sit amequuntur <br />
        rerum ipsam porro deserunt nostrum nobis distinctio.</span>
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
        detail={"HTML, CSS, Bootstrap, JavaScript, React"}
        />
      </div>
      <div style={{ top:'19rem' , left:'12rem'}}>
        <Card 
        emoji={Humble}
        heading={'Developer'}
        detail={"HTML, CSS, Bootstrap, JavaScript, React"}
        />
      </div>
      <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
      </div>
 
  );
};

export default Services;