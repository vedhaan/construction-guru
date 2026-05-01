import Projects from '../Components/Projects/Projects';
// import Properties from '../Components/Properties/Properties';
import PageHero from '../Components/common/PageHero';
import projectsHeroImg from '../assets/prop-1.jpg';

const ProjectsPage = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Our Projects"
                subtitle="Masterpieces in Architecture"
                image={projectsHeroImg}
            />
            <Projects />
            {/* <Properties /> */}
        </div>
    );
};

export default ProjectsPage;
