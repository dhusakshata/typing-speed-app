import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usericon from './images/th.jpg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    
    <div className='navsection'>

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>TypeCat</h1>
      <img src={usericon} alt="user" onClick={toggleLinks} />

</div>
      {showLinks && (
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
