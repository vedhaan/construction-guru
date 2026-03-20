import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import InquiryPage from './Pages/InquiryPage';

import ScrollToTop from './Components/common/ScrollToTop';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
