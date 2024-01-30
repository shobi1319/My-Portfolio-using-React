import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Services/Serives";
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Services/>
    </div>
  );
}

export default App;
