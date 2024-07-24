import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from'react-router-dom';
import Home from '../src/pages/Home.js';
import AboutUs from '../src/pages/AboutUs.js';
import Academics from '../src/pages/ Academics.js';
import Admissions from '../src/pages/Admissions.js';
import Faculty from '../src/pages/Faculty.js';
import Students from '../src/pages/ Students.js';
import Gallery from '../src/pages/Gallery.js';
import ContactUs from '../src/pages/ContactUs.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
