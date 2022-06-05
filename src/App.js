// import logo from './logo.svg';
import react from "react";
import './App.css';
import Navbar  from './components/Navbar';
import Slider from "./components/Slider";
import CardSlides from './components/cardSlide'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./components/Footer";
  function App() {
    return (<>
      <Navbar />
      <Slider />
      <CardSlides />
      <Footer />
      </>
    );
  }

export default App;
