import Reveal from "../common/Reveal";
import { Phone, Mail, Linkedin, Instagram } from "lucide-react";
import "./MeetOurTeam.css";

import team1 from "../../assets/agent-1.jpg";

const teamMembers = [
    {
        name: "Robert Fox",
        role: "Chief Executive Officer",
        image: team1,
        phone: "+1 234 567 890",
        email: "robert@example.com",
        instagram: "#",
        linkedin: "#",
    },
    {
        name: "Kristin Watson",
        role: "Marketing Director",
        image: team1,
        phone: "+1 234 567 891",
        email: "kristin@example.com",
        instagram: "#",
        linkedin: "#",
    },
    {
        name: "Guy Hawkins",
        role: "Property Consultant",
        image: team1,
        phone: "+1 234 567 892",
        email: "guy@example.com",
        instagram: "#",
        linkedin: "#",
    },
];

const MeetOurTeam = () => {
    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-header center">
                    <h2 className="title">
                        Meet Our <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-muted">
                        Experienced professionals dedicated to your success.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.15}
                            width="100%"
                            variant="slide"
                            direction="up"
                            className="team-card-wrapper"
                        >
                            <div className="team-card">
                                <div className="team-img-wrapper">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay">
                                        <div className="social-row">
                                            <a href={`tel:${member.phone}`} className="social-btn">
                                                <Phone size={18} />
                                            </a>
                                            <a href={`mailto:${member.email}`} className="social-btn">
                                                <Mail size={18} />
                                            </a>
                                            <a href={member.instagram} className="social-btn">
                                                <Instagram size={18} />
                                            </a>
                                            <a href={member.linkedin} className="social-btn">
                                                <Linkedin size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
