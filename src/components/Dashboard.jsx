import Header from './Header';
import { Link } from 'react-router-dom';

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <Header user={user} onLogout={onLogout} />
       
      <div className="container">
        <div className="welcome-banner">
          <h2>Welcome back, {user.name}!</h2>
          <p>Ready to advance your tech career? Explore our latest courses and opportunities.</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Premium Courses</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Internship Programs</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Training Bootcamps</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Success Stories</div>
          </div>
        </div>

        <div className="page-header">
          <h1>Your Learning Journey Starts Here</h1>
          <p>Choose from our comprehensive selection of courses, internships, and training programs designed to launch your tech career.</p>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3>🎓 Premium Courses</h3>
            <p>Access high-quality recorded video courses covering the latest technologies including React, Node.js, Python, and more.</p>
            <Link to="/courses" className="btn-primary">Explore Courses</Link>
          </div>

          <div className="card">
            <h3>💼 Internships</h3>
            <p>Apply for real-world internship opportunities with top tech companies and startups to gain practical experience.</p>
            <Link to="/internships" className="btn-primary">View Opportunities</Link>
          </div>

          <div className="card">
            <h3>🚀 Training Programs</h3>
            <p>Join intensive training bootcamps and workshops designed to fast-track your career in specific technology domains.</p>
            <Link to="/trainings" className="btn-primary">Join Training</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;