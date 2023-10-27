import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypingTest from './components/TypingTest';
import ScoreSummary from './components/ScoreSummary';
import Footer from './components/Footer';
import Login from './components/User/login';
import Signup from './components/User/signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<TypingTest />} />
          <Route path="/score-summary" element={<ScoreSummary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
