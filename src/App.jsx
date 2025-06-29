import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutCompany from "./components/Archi";
import Projects from "./components/Projects";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MoreAboutUs from "./components/MoreAboutUs";






import Apartament from "./components/apartament/Apartament"

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutCompany />} />
          <Route path="/company" element={<AboutCompany />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id"  element={<Apartament />}/>
          <Route path="/Archi" element={<MoreAboutUs />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;