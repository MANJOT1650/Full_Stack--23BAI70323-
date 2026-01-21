import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Enrolled from './pages/Enrolled';
import Login from './pages/Login';
import Register from './pages/Register';
import Feedback from './pages/Feedback';
import { ThemeProvider } from './context/ThemeContext';
import { CourseProvider } from './context/CourseContext';

function App() {
  return (
    <ThemeProvider>
      <CourseProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enrolled" element={<Enrolled />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </CourseProvider>
    </ThemeProvider>
  );
}

export default App;
