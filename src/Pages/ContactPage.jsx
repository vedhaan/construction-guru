import Contact from '../Components/Contact/Contact';
import PageHero from '../Components/common/PageHero';
import contactHeroImg from '../assets/hero-bg.jpg';

const ContactPage = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Contact Us"
                subtitle="Get In Touch"
                image={contactHeroImg}
            />
            <Contact />
        </div>
    );
};

export default ContactPage;
