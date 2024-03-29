
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './About';
//import About from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import MiniProjects from './MiniProjects';
import Navbar from './Navbar';
import Achievements from './Achievements';
import Academics from './Academics';
import miniprojects_data from './miniprojects_api';
import projects_data from './projects_api';
import React from 'react';
import { useState } from 'react';
import Skills from './Skills';
function App() {

  const [projectsdata,SetProjectsData]=useState(projects_data);
  const [miniprojectsData,SetMiniprojectsData]=useState(miniprojects_data);
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/academics" element={<Academics/>}></Route>
        <Route path="/projects" element={<Projects projects_data={projects_data}/>}></Route>
        <Route path="/miniprojects" element={<MiniProjects miniprojectsData={miniprojectsData}/>}></Route>
        <Route path="/achievements" element={<Achievements/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
