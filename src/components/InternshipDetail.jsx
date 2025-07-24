import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function InternshipDetail({ user, onLogout, onApplication }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    resume: '',
    coverLetter: '',
    portfolio: '',
    experience: '',
    availability: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const internships = {
    1: {
      title: "Frontend Developer Intern",
      company: "TechFlow Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "$800/month",
      description: "Work on real React.js projects and gain hands-on experience with modern web development.",
      requirements: ["Basic knowledge of React.js", "HTML/CSS proficiency", "Git version control"],
      responsibilities: [
        "Develop responsive web interfaces using React.js",
        "Collaborate with senior developers on project features",
        "Participate in code reviews and learn best practices",
        "Work with design team to implement UI components",
        "Write clean, maintainable code following team standards"
      ],
      benefits: [
        "Mentorship from experienced developers",
        "Flexible working hours",
        "Certificate of completion",
        "Potential for full-time offer",
        "Access to company learning resources"
      ]
    }
  };

  const internship = internships[id] || internships[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applicationData = {
      internshipId: id,
      internshipTitle: internship.title,
      company: internship.company,
      applicantName: user.name,
      applicantEmail: user.email,
      ...formData
    };

    onApplication(applicationData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <button onClick={() => navigate('/internships')} className="btn-secondary" style={{marginBottom: '2rem'}}>
          ← Back to Internships
        </button>

        <div className="grid grid-2">
          <div>
            <h1>{internship.title}</h1>
            <p style={{fontSize: '1.2rem', color: '#2563eb', marginBottom: '1rem'}}>
              <strong>{internship.company}</strong> • {internship.location}
            </p>
            <div className="duration">{internship.duration}</div>
            <div className="price" style={{marginBottom: '2rem'}}>{internship.stipend}</div>
            
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>{internship.description}</p>

            <div style={{marginBottom: '2rem'}}>
              <h3>Key Responsibilities</h3>
              <ul>
                {internship.responsibilities.map((resp, index) => (
                  <li key={index} style={{marginBottom: '0.5rem'}}>{resp}</li>
                ))}
              </ul>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3>Requirements</h3>
              <ul>
                {internship.requirements.map((req, index) => (
                  <li key={index} style={{marginBottom: '0.5rem'}}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Benefits</h3>
              <ul>
                {internship.benefits.map((benefit, index) => (
                  <li key={index} style={{marginBottom: '0.5rem'}}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {!submitted ? (
              <div className="application-form">
                <h3>Apply for this Internship</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="resume">Resume/CV Link</label>
                    <input
                      type="url"
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="https://your-resume-link.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio Link (Optional)</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Relevant Experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Describe your relevant experience, projects, and skills..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Why are you interested in this internship? What makes you a good fit?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="When can you start? Full-time or part-time?"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{width: '100%'}}>
                    Submit Application
                  </button>
                </form>
              </div>
            ) : (
              <div className="application-form">
                <div className="success-message">
                  <h3>Application Submitted Successfully!</h3>
                  <p>Thank you for applying to {internship.title} at {internship.company}. 
                     We have received your application and will review it shortly.</p>
                  <p><strong>Application Details:</strong></p>
                  <p>Position: {internship.title}</p>
                  <p>Company: {internship.company}</p>
                  <p>Applied by: {user.name} ({user.email})</p>
                  <p>The hiring team will contact you via email if your profile matches their requirements.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipDetail;