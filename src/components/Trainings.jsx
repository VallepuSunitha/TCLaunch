import { Link } from 'react-router-dom';
import Header from './Header';

function Trainings({ user, onLogout }) {
  const trainings = [
    {
      id: 1,
      title: "React.js Bootcamp",
      description: "Intensive 8-week bootcamp covering React.js from fundamentals to advanced concepts with live projects.",
      price: "$299",
      duration: "8 weeks",
      schedule: "Mon-Wed-Fri, 7PM-9PM",
      level: "Beginner to Intermediate",
      participants: "Max 25 students"
    },
    {
      id: 2,
      title: "Full Stack MERN Bootcamp",
      description: "Complete 12-week program covering MongoDB, Express, React, and Node.js with capstone project.",
      price: "$499",
      duration: "12 weeks",
      schedule: "Tue-Thu-Sat, 6PM-9PM",
      level: "Intermediate",
      participants: "Max 20 students"
    },
    {
      id: 3,
      title: "Python Data Science Workshop",
      description: "6-week intensive workshop on data analysis, visualization, and machine learning with Python.",
      price: "$399",
      duration: "6 weeks",
      schedule: "Weekends, 10AM-4PM",
      level: "Beginner to Advanced",
      participants: "Max 30 students"
    },
    {
      id: 4,
      title: "DevOps Engineering Bootcamp",
      description: "10-week comprehensive program covering Docker, Kubernetes, AWS, and CI/CD pipelines.",
      price: "$549",
      duration: "10 weeks",
      schedule: "Mon-Wed-Fri, 8PM-10PM",
      level: "Intermediate to Advanced",
      participants: "Max 15 students"
    },
    {
      id: 5,
      title: "Mobile App Development Workshop",
      description: "8-week hands-on workshop building iOS and Android apps using React Native and Flutter.",
      price: "$349",
      duration: "8 weeks",
      schedule: "Tue-Thu, 7PM-9PM",
      level: "Intermediate",
      participants: "Max 20 students"
    },
    {
      id: 6,
      title: "UI/UX Design Masterclass",
      description: "6-week design masterclass covering user research, prototyping, and modern design tools.",
      price: "$249",
      duration: "6 weeks",
      schedule: "Weekends, 2PM-6PM",
      level: "Beginner to Intermediate",
      participants: "Max 25 students"
    }
  ];

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <div className="page-header">
          <h1>Training Programs</h1>
          <p>Join live training bootcamps and workshops with expert instructors and hands-on projects.</p>
        </div>

        <div className="grid grid-2">
          {trainings.map(training => (
            <div key={training.id} className="card">
              <h3>{training.title}</h3>
              <div className="duration">{training.duration} • {training.participants}</div>
              <p>{training.description}</p>
              <div className="price">{training.price}</div>
              <p><strong>Schedule:</strong> {training.schedule}</p>
              <p><strong>Level:</strong> {training.level}</p>
              <Link to={`/trainings/${training.id}`} className="btn-primary">
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trainings;