// import React from 'react';
// import './Education.css';
//
// const educationData = [
//     {id: 1, degree: 'MSc Data Science', institution: 'University of Aberdeen', file: '/education/Bachelor_Degree.jpg'},
//     {
//         id: 2,
//         degree: 'BBA - Bachelor of Business Administration',
//         institution: 'Guru Gobind Singh Indraprastha University',
//         file: '/education/MSc_Degree.jpg'
//     },
//     // Add more education entries if needed
// ];
//
// function Education() {
//     return (
//         <section id="education">
//             <h2>Education</h2>
//             <div className="education-list">
//                 {educationData.map(edu => (
//                     <div key={edu.id} className="education-item">
//                         <h3>{edu.degree}</h3>
//                         <p>{edu.institution}</p>
//                         {edu.file && (
//                             <a href={`/education/${edu.file}`} target="_blank" rel="noopener noreferrer"
//                                className="degree-link">
//                                 View Degree
//                             </a>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
//
// export default Education;

import React from 'react';
import './Education.css';

const educationData = [
    {id: 1, degree: 'MSc Data Science', institution: 'University of Aberdeen', file: `${process.env.PUBLIC_URL}/education/MSc_Degree.jpg`},
    {
        id: 2,
        degree: 'BBA - Bachelor of Business Administration',
        institution: 'Guru Gobind Singh Indraprastha University',
        file: `${process.env.PUBLIC_URL}/education/Bachelor_Degree.jpg`
    }

];

function Education() {
    const isImage = (file) => {
        return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
    };

    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-list">
                {educationData.map(edu => (
                    <div key={edu.id} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution}</p>
                        {edu.file && (
                            isImage(edu.file) ? (
                                <a href={edu.file} target="_blank" rel="noopener noreferrer">
                                    <img src={edu.file} alt={edu.degree} className="education-image" />
                                </a>
                            ) : (
                                <a href={edu.file} target="_blank" rel="noopener noreferrer" className="degree-link">
                                    View Degree
                                </a>
                            )
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Education;
