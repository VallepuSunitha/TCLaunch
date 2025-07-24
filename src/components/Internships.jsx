import { Link } from 'react-router-dom';
import Header from './Header';

function Internships({ user, onLogout }) {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechFlow Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "$800/month",
      description: "Work on real React.js projects and gain hands-on experience with modern web development.",
      requirements: ["Basic knowledge of React.js", "HTML/CSS proficiency", "Git version control"]
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "InnovateTech",
      location: "San Francisco, CA",
      duration: "6 months",
      stipend: "$1200/month",
      description: "Build complete web applications using MERN stack and work with experienced developers.",
      requirements: ["JavaScript proficiency", "React & Node.js basics", "Database knowledge"]
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataDriven Corp",
      location: "New York, NY",
      duration: "4 months",
      stipend: "$1000/month",
      description: "Analyze large datasets and build machine learning models using Python and TensorFlow.",
      requirements: ["Python programming", "Statistics knowledge", "SQL basics"]
    },
    {
      id: 4,
      title: "Mobile App Developer Intern",
      company: "AppCrafters",
      location: "Remote",
      duration: "3 months",
      stipend: "$900/month",
      description: "Develop cross-platform mobile applications using React Native and Flutter.",
      requirements: ["React Native basics", "Mobile UI/UX understanding", "JavaScript proficiency"]
    },
    {
      id: 5,
      title: "DevOps Engineering Intern",
      company: "CloudScale Systems",
      location: "Seattle, WA",
      duration: "5 months",
      stipend: "$1100/month",
      description: "Learn cloud infrastructure, Docker containerization, and CI/CD pipeline management.",
      requirements: ["Linux command line", "Basic networking", "Docker basics"]
    },
    {
      id: 6,
      title: "UI/UX Design Intern",
      company: "DesignHub",
      location: "Remote",
      duration: "3 months",
      stipend: "$700/month",
      description: "Create user interfaces and experiences for web and mobile applications.",
      requirements: ["Design portfolio", "Figma/Sketch proficiency", "User research basics"]
    }
  ];

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <div className="page-header">
          <h1>Internship Opportunities</h1>
          <p>Apply for real-world internships with top companies and gain valuable industry experience.</p>
        </div>

        <div className="grid grid-2">
          {internships.map(internship => (
            <div key={internship.id} className="card">
              <h3>{internship.title}</h3>
              <p><strong>{internship.company}</strong> • {internship.location}</p>
              <div className="duration">{internship.duration}</div>
              <div className="price">{internship.stipend}</div>
              <p>{internship.description}</p>
              <div style={{marginBottom: '1rem'}}>
                <strong>Requirements:</strong>
                <ul style={{marginTop: '0.5rem'}}>
                  {internship.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/internships/${internship.id}`} className="btn-primary">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internships;