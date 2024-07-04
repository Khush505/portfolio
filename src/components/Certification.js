import React from 'react';

const certificates = [
    { id: 1, name: 'Data Analytics and Visualization', file: `${process.env.PUBLIC_URL}/certificates/Accenture_Certificate.jpg` },
    { id: 2, name: 'Machine Learning and AI Certification', file: `${process.env.PUBLIC_URL}/certificates/Diabetic_Retinopathy.jpg` },
    { id: 3, name: 'Data Science Internship - Data Glacier', file: `${process.env.PUBLIC_URL}/certificates/Khushboo_Masih_Event_Certificate.jpg` },
    { id: 4, name: 'Networking Event - Bright Network', file: `${process.env.PUBLIC_URL}/certificates/Internship-Bright_Network.png` },
    { id: 5, name: 'Linkedin Workshop - Intern Group', file: `${process.env.PUBLIC_URL}/certificates/Khushboo_Masih_DS_Internship.jpg` },
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
                            <a href={cert.file} target="_blank" rel="noopener noreferrer" className="certificate-link">
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
