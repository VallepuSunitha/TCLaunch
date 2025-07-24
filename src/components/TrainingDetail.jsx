import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function TrainingDetail({ user, onLogout, onPurchase }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);

  const trainings = {
    1: {
      title: "React.js Bootcamp",
      description: "Intensive 8-week bootcamp covering React.js from fundamentals to advanced concepts with live projects.",
      price: "$299",
      duration: "8 weeks",
      schedule: "Mon-Wed-Fri, 7PM-9PM",
      level: "Beginner to Intermediate",
      participants: "Max 25 students",
      instructor: "Alex Rodriguez - Senior React Developer at Netflix",
      startDate: "March 15, 2024",
      curriculum: [
        "Week 1-2: React Fundamentals and JSX",
        "Week 3-4: Components, Props, and State",
        "Week 5-6: Hooks and Context API",
        "Week 7-8: Advanced Patterns and Performance",
        "Final Project: Build a Complete Web Application"
      ],
      includes: [
        "Live interactive sessions",
        "Code reviews and feedback",
        "Project mentorship",
        "Certificate of completion",
        "Job placement assistance",
        "Access to exclusive community"
      ]
    }
  };

  const training = trainings[id] || trainings[1];

  const handleEnroll = () => {
    onPurchase({
      type: 'training',
      title: training.title,
      price: training.price,
      duration: training.duration,
      startDate: training.startDate
    });
    setEnrolled(true);
  };

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <button onClick={() => navigate('/trainings')} className="btn-secondary" style={{marginBottom: '2rem'}}>
          ← Back to Trainings
        </button>

        <div className="grid grid-2">
          <div>
            <h1>{training.title}</h1>
            <div className="duration">{training.duration} • {training.participants}</div>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>{training.description}</p>
            
            <div style={{marginBottom: '2rem'}}>
              <h3>Training Details</h3>
              <p><strong>Instructor:</strong> {training.instructor}</p>
              <p><strong>Duration:</strong> {training.duration}</p>
              <p><strong>Schedule:</strong> {training.schedule}</p>
              <p><strong>Level:</strong> {training.level}</p>
              <p><strong>Start Date:</strong> {training.startDate}</p>
              <p><strong>Class Size:</strong> {training.participants}</p>
            </div>

            <div className="price" style={{fontSize: '2rem', marginBottom: '2rem'}}>{training.price}</div>
            
            {!enrolled ? (
              <button onClick={handleEnroll} className="btn-primary" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
                Enroll in Training
              </button>
            ) : (
              <div className="success-message">
                Successfully enrolled! Check your email for further instructions and access details.
              </div>
            )}
          </div>

          <div>
            <div className="card">
              <h3>Training Curriculum</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {training.curriculum.map((item, index) => (
                  <li key={index} style={{padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb'}}>
                    📅 {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{marginTop: '1rem'}}>
              <h3>What's Included</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {training.includes.map((item, index) => (
                  <li key={index} style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>

            {enrolled && (
              <div className="card" style={{marginTop: '1rem'}}>
                <h3>Next Steps</h3>
                <p>🎉 Welcome to the {training.title}!</p>
                <p>📧 Check your email ({user.email}) for:</p>
                <ul>
                  <li>Training schedule and meeting links</li>
                  <li>Pre-course preparation materials</li>
                  <li>Community access instructions</li>
                  <li>Contact information for support</li>
                </ul>
                <p style={{marginTop: '1rem', color: '#10b981', fontWeight: '600'}}>
                  Training starts on {training.startDate}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingDetail;