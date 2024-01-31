import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Serives";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimon from "./Components/Testimon/Testimon";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Works/>
   <Portfolio/>
   <Testimon/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
