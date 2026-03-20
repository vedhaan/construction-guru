import React from 'react';
import Hero from '../Components/Hero/hero';
import Categories from '../Components/Categories/Categories';
import About from '../Components/About/About';
import HomeServices from '../Components/Services/HomeServices/HomeServices';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import Benefits from '../Components/Benefits/Benefits';
// import Properties from '../Components/Properties/Properties';
import Projects from '../Components/Projects/Projects';
import StickySocial from '../Components/StickySocial/StickySocial';
import Rent from '../Components/Rent/Rent';
import Agents from '../Components/Agents/Agents';
import Contact from '../Components/Contact/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <HomeServices />
            {/* <Categories limit={3} /> */}
            <About />
            <WhyChooseUs />
            {/* <Benefits /> */}
            {/* <Properties /> */}
            <Projects />
            <StickySocial />
            {/* <Rent /> */}
            <Agents />
            <Contact />
        </>
    );
};

export default Home;
