import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

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
          <a href="about"   className={selectedLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}>About</a>

          <a href="skills"   className={selectedLink === 'skills' ? 'active' : ''}
          onClick={() => handleLinkClick('skills')}>Skills</a>

       
<a href="academics"   className={selectedLink === 'academics' ? 'active' : ''}
          onClick={() => handleLinkClick('academics')}>Academics</a>

          <a href="projects"   className={selectedLink === 'projects' ? 'active' : ''}
          onClick={() => handleLinkClick('projects')}>Projects</a>

          <a href="miniprojects"   className={selectedLink === 'miniprojects' ? 'active' : ''}
          onClick={() => handleLinkClick('miniprojects')}>Mini Projects</a>

            <a href="experience"   className={selectedLink === 'experience' ? 'active' : ''}
          onClick={() => handleLinkClick('experience')}>Experience</a>

<a href="resume"   className={selectedLink === 'resume' ? 'active' : ''}
          onClick={() => handleLinkClick('resume')}>Resume</a>

          <a href="achievements"   className={selectedLink === 'achievements' ? 'active' : ''}
          onClick={() => handleLinkClick('achievements')}>Achievements</a>

          <a href="contact"   className={selectedLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}>Contact</a>
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
