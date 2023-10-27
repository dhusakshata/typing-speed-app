import React from 'react';
import { Link } from 'react-router-dom';

const ScoreSummary = () => {
  return (
    <div>
      <h2>Score Summary</h2>
      <p>WPM: 60 (Example)</p>
      <p>Accuracy: 95% (Example)</p>
      <Link to="/">Start a new test</Link>
    </div>
  );
};

export default ScoreSummary;
