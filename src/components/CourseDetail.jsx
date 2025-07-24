import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function CourseDetail({ user, onLogout, onPurchase }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [purchased, setPurchased] = useState(false);

  const courses = {
    1: {
      title: "Complete React.js Mastery",
      description: "Master React.js from basics to advanced concepts including hooks, context, and state management.",
      price: "$99",
      duration: "40 hours",
      level: "Beginner to Advanced",
      videos: 45,
      curriculum: [
        "React Fundamentals and JSX",
        "Components and Props",
        "State and Event Handling",
        "React Hooks (useState, useEffect, useContext)",
        "Routing with React Router",
        "State Management with Redux",
        "API Integration and Async Operations",
        "Testing React Applications",
        "Performance Optimization",
        "Deployment and Production Best Practices"
      ],
      instructor: "Sarah Johnson - Senior React Developer at Google",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    2: {
      title: "Full Stack JavaScript Development",
      description: "Learn to build complete web applications using React, Node.js, Express, and MongoDB.",
      price: "$149",
      duration: "60 hours",
      level: "Intermediate",
      videos: 72,
      curriculum: [
        "JavaScript ES6+ Features",
        "React Frontend Development",
        "Node.js and Express Backend",
        "MongoDB Database Design",
        "RESTful API Development",
        "Authentication and Authorization",
        "Real-time Features with Socket.io",
        "Testing Full Stack Applications",
        "Deployment and DevOps",
        "Project: Build a Complete Social Media App"
      ],
      instructor: "Mike Chen - Full Stack Architect at Microsoft",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    }
  };

  const course = courses[id] || courses[1];

  const handlePurchase = () => {
    onPurchase({
      type: 'course',
      title: course.title,
      price: course.price,
      duration: course.duration
    });
    setPurchased(true);
  };

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      <div className="container">
        <button onClick={() => navigate('/courses')} className="btn-secondary" style={{marginBottom: '2rem'}}>
          ← Back to Courses
        </button>

        <div className="grid grid-2">
          <div>
            <h1>{course.title}</h1>
            <div className="duration">{course.duration} • {course.videos} videos</div>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>{course.description}</p>
            
            <div style={{marginBottom: '2rem'}}>
              <h3>Course Details</h3>
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Total Videos:</strong> {course.videos}</p>
            </div>

            <div className="price" style={{fontSize: '2rem', marginBottom: '2rem'}}>{course.price}</div>
            
            {!purchased ? (
              <button onClick={handlePurchase} className="btn-primary" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
                Purchase Course
              </button>
            ) : (
              <div className="success-message">
                Course purchased successfully! Access it from your dashboard.
              </div>
            )}
          </div>

          <div>
            <div className="card">
              <h3>Course Curriculum</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {course.curriculum.map((item, index) => (
                  <li key={index} style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>
                    📚 {item}
                  </li>
                ))}
              </ul>
            </div>

            {purchased && (
              <div className="card" style={{marginTop: '1rem'}}>
                <h3>Sample Video</h3>
                <video 
                  controls 
                  style={{width: '100%', borderRadius: '0.5rem'}}
                  poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                >
                  <source src={course.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p style={{marginTop: '1rem', color: '#6b7280'}}>
                  This is a sample video. The full course content will be available in your dashboard.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;