import React from 'react';
import './Certificates.css';

const certificates = [
    { id: 1, name: 'Data Analytics and Visualization', file: '/certificates/Accenture_Certificate.jpg' },
    { id: 2, name: 'Machine Learning and AI Certification', file: '/certificates/Diabetic_Retinopathy.jpg' },
    { id: 3, name: 'Networking Event - Bright Network', file: '/certificates/Internship-Bright_Network.png' },
    { id: 4, name: 'Linkedin Workshop - Intern Group', file: '/certificates/Khushboo_Masih_DS_Internship.jpg' },
    { id: 5, name: 'Data Science Internship - Data Glacier', file: '/certificates/Khushboo_Masih_Event_Certificate.jpg' },
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
                            <a href={cert.file} target="_blank" rel="noopener noreferrer">
                                <img src={cert.file} alt={cert.name} className="certificate-image" />
                            </a>
                        ) : (
                            <a href={cert.file}  rel="noopener noreferrer" className="certificate-link">
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
