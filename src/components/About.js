import React from 'react';

function About() {
  const skills = [
    { name: "R Programming", icon: "📊" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Python Programming", icon: "🐍" },
    { name: "Wolfram Mathematica", icon: "🔢" },
    { name: "MS Excel", icon: "📊" },
    { name: "Microsoft Power BI", icon: "📈" },
    { name: "Vision Control", icon: "👁️" },
    { name: "Git", icon: "🔧" },
    { name: "Bitbucket", icon: "🔗" }
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hello there, I'm Khushboo Masih, a Data Scientist based in London, United Kingdom. I graduated with a Master's degree in data science and have a keen interest in sustainability, healthcare, finance and aerospace.</p>
      <p>Some of my technical skills include:</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="icon">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
      <p>I'm dedicated to transforming data into actionable insights that drive progress and improvement.</p>
    </section>
  );
}

export default About;
