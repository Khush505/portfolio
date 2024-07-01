import React from 'react';
import './Education.css';

const educationData = [
  {id: 1, degree: 'MSc Data Science', institution: 'University of Aberdeen', file: 'MSc Degree.pdf'},
  {id: 2, degree: 'BBA - Bachelor of Business Administration', institution: 'Guru Gobind Singh Indraprastha University', file: 'Bachelor’s Degree.pdf'},
  // Add more education entries if needed
];

function Education() {
    return (
      <section id="education">
        <h2>Education</h2>
        <div className="education-list">
          {educationData.map(edu => (
            <div key={edu.id} className="education-item">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              {edu.file && (
                <a href={`/education/${edu.file}`} target="_blank" rel="noopener noreferrer" className="degree-link">
                  View Degree
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Education;