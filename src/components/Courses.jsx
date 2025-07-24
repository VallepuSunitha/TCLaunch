import { Link } from 'react-router-dom';
import Header from './Header';

function Courses({ user, onLogout }) {
  const courses = [
    {
      id: 1,
      title: "Complete React.js Mastery",
      description: "Master React.js from basics to advanced concepts including hooks, context, and state management.",
      price: "$99",
      duration: "40 hours",
      level: "Beginner to Advanced",
      videos: 45
    },
    {
      id: 2,
      title: "Full Stack JavaScript Development",
      description: "Learn to build complete web applications using React, Node.js, Express, and MongoDB.",
      price: "$149",
      duration: "60 hours",
      level: "Intermediate",
      videos: 72
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Comprehensive Python course covering data analysis, machine learning, and data visualization.",
      price: "$129",
      duration: "50 hours",
      level: "Beginner to Intermediate",
      videos: 58
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps using React Native and deploy to both iOS and Android.",
      price: "$119",
      duration: "45 hours",
      level: "Intermediate",
      videos: 52
    },
    {
      id: 5,
      title: "DevOps and Cloud Computing",
      description: "Learn Docker, Kubernetes, AWS, and modern DevOps practices for scalable applications.",
      price: "$159",
      duration: "55 hours",
      level: "Advanced",
      videos: 65
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      description: "Master design principles, user research, prototyping, and modern design tools.",
      price: "$89",
      duration: "35 hours",
      level: "Beginner",
      videos: 42
    }
  ];

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <div className="page-header">
          <h1>Premium Courses</h1>
          <p>High-quality recorded video courses taught by industry experts to advance your tech career.</p>
        </div>

        <div className="grid grid-2">
          {courses.map(course => (
            <div key={course.id} className="card">
              <h3>{course.title}</h3>
              <div className="duration">{course.duration} • {course.videos} videos</div>
              <p>{course.description}</p>
              <div className="price">{course.price}</div>
              <p><strong>Level:</strong> {course.level}</p>
              <Link to={`/courses/${course.id}`} className="btn-primary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;