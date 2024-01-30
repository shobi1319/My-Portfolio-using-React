import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Services/Serives";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Works/>
   <Portfolio/>
    </div>
  );
}

export default App;
