import Reveal from "../common/Reveal";
import { ArrowRight, MapPin } from "lucide-react";
import "./Projects.css";
import project1 from "../../assets/prop-1.jpg";
import project2 from "../../assets/prop-2.jpg";
import project3 from "../../assets/prop-3.jpg";

const projects = [
    {
        id: 1,
        title: "The Skyline Tower",
        location: "Downtown, Metro City",
        status: "Under Construction",
        price: "Starts $250k",
        image: project1,
    },
    {
        id: 2,
        title: "Green Valley Villas",
        location: "Suburbs, Green Area",
        status: "Ready to Move",
        price: "Starts $450k",
        image: project2,
    },
    {
        id: 3,
        title: "Ocean Breeze Apts",
        location: "Coastal Road, Beachside",
        status: "Pre-Launch",
        price: "Starts $180k",
        image: project3,
    },
];

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header center">
                    <h2 className="title">Exclusive <span className="text-gradient">New Projects</span></h2>
                    <p className="text-muted">Discover our latest premium developments and upcoming communities.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            width="100%"
                            delay={index * 0.15}
                            variant="zoom"
                            className="project-card-wrapper"
                        >
                            <div className="project-card">
                                <div className="project-img">
                                    <img src={project.image} alt={project.title} />
                                    <span className={`status-badge ${project.status.toLowerCase().replace(/\s/g, '-')}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="project-content">
                                    <div className="project-loc">
                                        <MapPin size={16} />
                                        <span>{project.location}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p className="price">{project.price}</p>
                                    <button className="btn btn-outline small">View Details <ArrowRight size={16} /></button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
