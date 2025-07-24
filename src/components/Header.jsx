import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/dashboard" className="logo">
          TCLaunch
        </Link>
        
        <nav className="nav">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/internships" className="nav-link">Internships</Link>
          <Link to="/trainings" className="nav-link">Trainings</Link>
          <Link to="/my-dashboard" className="nav-link">My Learning</Link>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;