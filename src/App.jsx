import './App.css';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Properties from './Components/Properties/Properties';
import Categories from './Components/Categories/Categories';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Benefits from './Components/Benefits/Benefits';
import Agents from './Components/Agents/Agents';
import Projects from './Components/Projects/Projects';
// import Sell from './Components/Sell/Sell';
import Rent from './Components/Rent/Rent';


import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Services />
      <WhyChooseUs />
      <Benefits />
      <Properties />
      <Projects />

      <Rent />
      {/* <Sell /> */}
      <Agents />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
