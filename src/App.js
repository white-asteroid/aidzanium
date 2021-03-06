
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Game1 from "./game1/Game1";
import Kuchbhi from "./game2/Game2";
import './App.css';
// import Footer from "./components/Footer";
  function App() {
    return (
      
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      {/* Vandana quiz game route */}
      <Route exact path="/game1" element={<Game1 />} />
      {/* Devanshi (second) game route */}
      <Route exact path="/game2" element={<Kuchbhi />} />
      {/* Vandana (third) game route */}
      {/* <Route exact path="/game3" element={<Game3 />} /> */}
    </Routes>
  </BrowserRouter>

    );
  }

export default App;
