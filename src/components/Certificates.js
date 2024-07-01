import React from 'react';
import './Certificates.css';

const certificates = [
  { id: 1, name: 'Data Analytics and Visualization', file: 'Accenture Certificate.pdf' },
  { id: 2, name: 'Machine Learning and AI Certification', file: 'Diabetic Retinopathy.pdf' },
  { id: 3, name: 'Networking Event - Bright Network', file: 'Internship-Bright Network.png' },
  { id: 4, name: 'Linkedin Workshop - Intern Group', file: 'Khushboo Masih Event Certificate.pdf' },
  { id: 5, name: 'Data Science Internship - Data Glacier', file: 'Khushboo Masih_DS_Internship.pdf' },
  // Add more certificates as needed
];

function Certificates() {
  const isImage = (file) => {
    return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
  };

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="certificate-card">
            {isImage(cert.file) ? (
              <a href={`/certificates/${cert.file}`} target="_blank" rel="noopener noreferrer">
                <img src={`/certificates/${cert.file}`} alt={cert.name} className="certificate-image" />
              </a>
            ) : (
              <a href={`/certificates/${cert.file}`} target="_blank" rel="noopener noreferrer" className="certificate-link">
                {cert.name}
              </a>
            )}
            <p>{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
