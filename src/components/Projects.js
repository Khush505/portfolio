import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Khush505/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <a key={project.id} href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>{project.name}</h3>
            <div className="project-stats">
              <span>⭐ {project.stargazers_count}</span>
              <span>👁 {project.watchers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;