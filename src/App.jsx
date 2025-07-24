import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Internships from './components/Internships';
import Trainings from './components/Trainings';
import CourseDetail from './components/CourseDetail';
import InternshipDetail from './components/InternshipDetail';
import TrainingDetail from './components/TrainingDetail';
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('tclaunch_user');
    const savedUsers = localStorage.getItem('tclaunch_registered_users');
    const savedApplications = localStorage.getItem('tclaunch_applications');
    const savedPurchases = localStorage.getItem('tclaunch_purchases');
    
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedUsers) setRegisteredUsers(JSON.parse(savedUsers));
    if (savedApplications) setApplications(JSON.parse(savedApplications));
    if (savedPurchases) setPurchases(JSON.parse(savedPurchases));
  }, []);

  const handleRegister = (userData) => {
    const newUsers = [...registeredUsers, userData];
    setRegisteredUsers(newUsers);
    localStorage.setItem('tclaunch_registered_users', JSON.stringify(newUsers));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('tclaunch_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('tclaunch_user');
  };

  const handleApplication = (applicationData) => {
    const newApplications = [...applications, { ...applicationData, id: Date.now(), date: new Date().toISOString() }];
    setApplications(newApplications);
    localStorage.setItem('tclaunch_applications', JSON.stringify(newApplications));
  };

  const handlePurchase = (purchaseData) => {
    const newPurchases = [...purchases, { ...purchaseData, id: Date.now(), date: new Date().toISOString(), userId: user.email }];
    setPurchases(newPurchases);
    localStorage.setItem('tclaunch_purchases', JSON.stringify(newPurchases));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route 
            path="/register" 
            element={<Register onRegister={handleRegister} registeredUsers={registeredUsers} />} 
          />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} registeredUsers={registeredUsers} />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/courses" 
            element={user ? <Courses user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/courses/:id" 
            element={user ? <CourseDetail user={user} onLogout={handleLogout} onPurchase={handlePurchase} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/internships" 
            element={user ? <Internships user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/internships/:id" 
            element={user ? <InternshipDetail user={user} onLogout={handleLogout} onApplication={handleApplication} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/trainings" 
            element={user ? <Trainings user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/trainings/:id" 
            element={user ? <TrainingDetail user={user} onLogout={handleLogout} onPurchase={handlePurchase} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/my-dashboard" 
            element={user ? <UserDashboard user={user} onLogout={handleLogout} purchases={purchases.filter(p => p.userId === user?.email)} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;