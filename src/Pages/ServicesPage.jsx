import Services from '../Components/Services/Services';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import PageHero from '../Components/common/PageHero';
import servicesHeroImg from '../assets/services/construction.jpg';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Our Services"
                subtitle="Expert Construction Solutions"
                image={servicesHeroImg}
            />
            <Services />
            <WhyChooseUs />
        </div>
    );
};

export default ServicesPage;
