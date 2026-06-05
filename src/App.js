import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from "./pages/OurTeam";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DonorRequest from "./pages/DonorRequest";
import Dashboard from "./pages/Dashboard";
import 'jquery'; 
import 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donor-request" element={<DonorRequest />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
