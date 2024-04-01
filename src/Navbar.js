import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedLink, setSelectedLink] = useState();

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Disha Shah</div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/about"   className={selectedLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}>About</Link>

          <Link to="/skills"   className={selectedLink === 'skills' ? 'active' : ''}
          onClick={() => handleLinkClick('skills')}>Skills</Link>

       
<Link to="/academics"   className={selectedLink === 'academics' ? 'active' : ''}
          onClick={() => handleLinkClick('academics')}>Academics</Link>

          <Link to="/projects"   className={selectedLink === 'projects' ? 'active' : ''}
          onClick={() => handleLinkClick('projects')}>Projects</Link>

          <Link to="/miniprojects"   className={selectedLink === 'miniprojects' ? 'active' : ''}
          onClick={() => handleLinkClick('miniprojects')}>Mini Projects</Link>

            <Link to="/experience"   className={selectedLink === 'experience' ? 'active' : ''}
          onClick={() => handleLinkClick('experience')}>Experience</Link>

<Link to="/resume"   className={selectedLink === 'resume' ? 'active' : ''}
          onClick={() => handleLinkClick('resume')}>Resume</Link>

          <Link to="/achievements"   className={selectedLink === 'achievements' ? 'active' : ''}
          onClick={() => handleLinkClick('achievements')}>Achievements</Link>

          <Link to="/contact"   className={selectedLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}>Contact</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
