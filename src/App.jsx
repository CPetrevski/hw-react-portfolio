import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Into"
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact";
import "./App.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
