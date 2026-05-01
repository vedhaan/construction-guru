import About from '../Components/About/About';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import Benefits from '../Components/Benefits/Benefits';
import PageHero from '../Components/common/PageHero';
import aboutHeroImg from '../assets/about_img.jpg';

const AboutPage = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="About Us"
                subtitle="Building Excellence"
                image={aboutHeroImg}
            />
            <About />
            <WhyChooseUs />
            <Benefits />
        </div>
    );
};

export default AboutPage;
