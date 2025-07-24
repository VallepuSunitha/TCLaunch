import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>TCLaunch</h1>
        <p>
          Tech Career Launch - Your gateway to a successful career in technology. 
          Access premium courses, internships, and training programs designed by industry experts.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;