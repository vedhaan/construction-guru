import React, { useState } from 'react';
import './Career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState('');

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobs = [
    {
      id: 1,
      title: 'Civil Engineer',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80k - $120k',
      tags: ['Engineering', 'Project Management']
    },
    {
      id: 2,
      title: 'Architectural Designer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $110k',
      tags: ['Design', 'Revit']
    },
    {
      id: 3,
      title: 'Site Supervisor',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$60k - $90k',
      tags: ['Construction', 'Safety']
    },
    {
      id: 4,
      title: 'Quantity Surveyor',
      location: 'London, UK',
      type: 'Contract',
      salary: '£400 - £500/day',
      tags: ['Estimation', 'Planning']
    },
    {
      id: 5,
      title: 'BIM Coordinator',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$85k - $115k',
      tags: ['BIM', 'Technology']
    },
    {
      id: 6,
      title: 'Project Manager',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$100k - $150k',
      tags: ['Management', 'Operations']
    }
  ];

  const benefits = [
    {
      icon: <i className="fas fa-heartbeat"></i>,
      title: 'Health & Wellness',
      desc: 'Comprehensive medical, dental, and vision insurance for you and your family.'
    },
    {
      icon: <i className="fas fa-laptop-house"></i>,
      title: 'Flexible Work',
      desc: 'We offer remote work options and flexible hours to help you maintain a great work-life balance.'
    },
    {
      icon: <i className="fas fa-graduation-cap"></i>,
      title: 'Learning & Growth',
      desc: 'Annual budget for certifications, workshops, and continuous professional development.'
    },
    {
      icon: <i className="fas fa-piggy-bank"></i>,
      title: 'Retirement Plans',
      desc: 'Generous 401(k) matching and financial planning assistance for your future.'
    }
  ];

  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <h1 className="title">Build Your Future With Us</h1>
          <p className="subtitle">Join a team of visionaries and experts dedicated to shaping the skylines of tomorrow. Your journey to excellence starts here.</p>
          <div className="hero-btns">
            <a href="#openings" className="btn btn-primary">View Openings</a>
            <a href="#application-form" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Apply Now</a>
          </div>
        </div>
      </section>

      {/* Openings Section
      <section id="openings" className="section openings-section">
        <div className="container">
          <div className="section-header">
            <h2 className="title">Current <span className="text-gradient">Openings</span></h2>
            <p className="subtitle">We are looking for passionate individuals who want to make a real impact in the construction and design industry.</p>
          </div>

          <div className="openings-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card glass-card">
                <div className="job-content">
                  <span className="job-tag">{job.type}</span>
                  <h3>{job.title}</h3>
                  <div className="job-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-tags">
                    {job.tags.map((tag, index) => (
                      <span key={index} style={{ marginRight: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="job-footer">
                  <span className="job-salary">{job.salary}</span>
                  <button
                    className="btn btn-outline"
                    style={{ padding: '0.5rem 1rem', minHeight: 'auto' }}
                    onClick={() => handleApplyClick(job.title)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form Section */}
      <section id="application-form" className="section application-section">
        <div className="container">
          <div className="application-form-wrapper glass-card">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="title">Apply for a <span className="text-gradient">Position</span></h2>
              <p className="subtitle" style={{ marginInline: 'auto' }}>Submit your application and resume. Our recruitment team will review it and get back to you soon.</p>
            </div>

            <form className="career-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="e.g. john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="e.g. +1 234 567 890" required />
                </div>
                <div className="form-group">
                  <label>Position Applied For</label>
                  <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    required
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="General Application">General Application</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Years of Experience</label>
                  <input type="number" min="0" placeholder="e.g. 5" required />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile (Optional)</label>
                  <input type="url" placeholder="https://linkedin.com/in/username" />
                </div>
                <div className="form-group full-width">
                  <label>Upload Resume (PDF/DOC)</label>
                  <div className="resume-upload-box">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>Drag and drop or click to upload your resume</span>
                    <input type="file" accept=".pdf,.doc,.docx" required />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Cover Letter / Additional Information</label>
                  <textarea placeholder="Tell us why you're a great fit for this role..." rows="5"></textarea>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary" style={{ minWidth: '250px' }}>Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title">Why <span className="text-gradient">Join Us?</span></h2>
            <p className="subtitle" style={{ marginInline: 'auto' }}>We believe in taking care of our people so they can focus on doing their best work.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p className="text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section culture-section">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-content">
              <h2 className="title">Our <span className="text-gradient">Culture</span></h2>
              <p className="subtitle">At Construction Guru, we foster a culture of innovation, collaboration, and mutual respect. We celebrate our wins together and support each other through challenges.</p>
              <ul style={{ marginBottom: '2rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <i className="fas fa-check-circle text-gradient"></i>
                  <span>Collaborative environment with cross-functional teams.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <i className="fas fa-check-circle text-gradient"></i>
                  <span>Commitment to diversity, equity, and inclusion.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <i className="fas fa-check-circle text-gradient"></i>
                  <span>Quarterly team-building events and celebrations.</span>
                </li>
              </ul>
              <button className="btn btn-primary">Learn More About Us</button>
            </div>
            <div className="culture-images">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team Work" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Office Life" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" alt="Meeting" />
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" alt="Innovation" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{ background: 'var(--secondary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="title" style={{ color: 'white' }}>Don't See a Perfect Fit?</h2>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginInline: 'auto' }}>We are always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <button className="btn btn-primary" onClick={() => handleApplyClick('General Application')}>Send General Application</button>
        </div>
      </section>
    </div>
  );
};

export default Career;
