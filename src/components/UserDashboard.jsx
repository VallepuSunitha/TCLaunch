import Header from './Header';
import { Link } from 'react-router-dom';

function UserDashboard({ user, onLogout, purchases }) {
  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <div className="page-header">
          <h1>My Learning Dashboard</h1>
          <p>Track your progress and access your purchased courses and enrolled programs.</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-number">{purchases.filter(p => p.type === 'course').length}</div>
            <div className="stat-label">Courses Purchased</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{purchases.filter(p => p.type === 'training').length}</div>
            <div className="stat-label">Trainings Enrolled</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{purchases.length}</div>
            <div className="stat-label">Total Purchases</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              ${purchases.reduce((total, p) => total + parseInt(p.price.replace('$', '')), 0)}
            </div>
            <div className="stat-label">Total Investment</div>
          </div>
        </div>

        {purchases.length === 0 ? (
          <div className="card" style={{textAlign: 'center', padding: '3rem'}}>
            <h3>No purchases yet</h3>
            <p>Start your learning journey by purchasing courses or enrolling in training programs.</p>
            <div style={{marginTop: '2rem'}}>
              <Link to="/courses" className="btn-primary" style={{marginRight: '1rem'}}>
                Browse Courses
              </Link>
              <Link to="/trainings" className="btn-secondary" style={{marginRight: '1rem'}}>
                View Trainings
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 style={{marginBottom: '2rem'}}>Your Learning Content</h2>
            <div className="grid grid-2">
              {purchases.map(purchase => (
                <div key={purchase.id} className="card">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                    <h3>{purchase.title}</h3>
                    <span className="duration">
                      {purchase.type === 'course' ? '📚 Course' : '🎓 Training'}
                    </span>
                  </div>
                  
                  <p><strong>Duration:</strong> {purchase.duration}</p>
                  <p><strong>Price:</strong> {purchase.price}</p>
                  <p><strong>Purchased:</strong> {new Date(purchase.date).toLocaleDateString()}</p>
                  
                  {purchase.type === 'training' && purchase.startDate && (
                    <p><strong>Start Date:</strong> {purchase.startDate}</p>
                  )}
                  
                  <div style={{marginTop: '1.5rem'}}>
                    {purchase.type === 'course' ? (
                      <button className="btn-primary">
                        Access Course Videos
                      </button>
                    ) : (
                      <button className="btn-primary">
                        Join Training Sessions
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{marginTop: '3rem'}}>
          <h2 style={{marginBottom: '2rem'}}>Learning Progress</h2>
          <div className="card">
            <h3>Achievements</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
              <div style={{textAlign: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🎯</div>
                <div style={{fontWeight: '600'}}>Learning Started</div>
                <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Welcome to TCLaunch!</div>
              </div>
              
              {purchases.length > 0 && (
                <div style={{textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: '0.5rem'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💰</div>
                  <div style={{fontWeight: '600'}}>First Purchase</div>
                  <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Investment in yourself!</div>
                </div>
              )}
              
              {purchases.filter(p => p.type === 'course').length > 0 && (
                <div style={{textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: '0.5rem'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📚</div>
                  <div style={{fontWeight: '600'}}>Course Explorer</div>
                  <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Self-paced learning</div>
                </div>
              )}
              
              {purchases.filter(p => p.type === 'training').length > 0 && (
                <div style={{textAlign: 'center', padding: '1rem', background: '#fef3c7', borderRadius: '0.5rem'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🎓</div>
                  <div style={{fontWeight: '600'}}>Training Participant</div>
                  <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Live learning experience</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;