import React, { useState } from 'react';
import './Nav.css'; // Import your CSS file for styling
import { NavLink, Outlet } from 'react-router-dom';

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
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Disha Shah</div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/about"   className={selectedLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}>About</NavLink>

          <NavLink to="/skills"   className={selectedLink === 'skills' ? 'active' : ''}
          onClick={() => handleLinkClick('skills')}>Skills</NavLink>

       
<NavLink to="/academics"   className={selectedLink === 'academics' ? 'active' : ''}
          onClick={() => handleLinkClick('academics')}>Academics</NavLink>

          <NavLink to="/projects"   className={selectedLink === 'projects' ? 'active' : ''}
          onClick={() => handleLinkClick('projects')}>Projects</NavLink>

          <NavLink to="/miniprojects"   className={selectedLink === 'miniprojects' ? 'active' : ''}
          onClick={() => handleLinkClick('miniprojects')}>Mini Projects</NavLink>

            <NavLink to="/experience"   className={selectedLink === 'experience' ? 'active' : ''}
          onClick={() => handleLinkClick('experience')}>Experience</NavLink>

<NavLink to="/resume"   className={selectedLink === 'resume' ? 'active' : ''}
          onClick={() => handleLinkClick('resume')}>Resume</NavLink>

          <NavLink to="/achievements"   className={selectedLink === 'achievements' ? 'active' : ''}
          onClick={() => handleLinkClick('achievements')}>Achievements</NavLink>

          <NavLink to="/contact"   className={selectedLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}>Contact</NavLink>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <Outlet/>
  </>
  
  );
}

export default Navbar;
