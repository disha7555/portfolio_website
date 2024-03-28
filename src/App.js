
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import projects_data from './projects_api';
import React from 'react';
import { useState } from 'react';
function App() {

  const [projectsdata,SetProjectsData]=useState(projects_data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects projects_data={projects_data}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
