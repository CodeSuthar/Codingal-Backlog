import React from "react";
import "./App.css";

const resumeData = {
  name: "Aditya Suthar",
  title: "Software Developer",
  contact: {
    email: "getintouch@codesuthar.is-a.dev",
    phone: "+91-XXXXXXXXXX",
    location: "India",
    linkedin: "linkedin.com/in/unknown",
    github: "github.com/codesuthar"
  },
  summary:
    "Passionate software developer with experience in building web applications using React, JavaScript, and modern web technologies. Strong problem-solving skills and a keen interest in learning new technologies.",
  skills: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "REST APIs"
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Solutions",
      period: "Jan 2023 - Present",
      details: [
        "Developed responsive web applications using React and JavaScript.",
        "Collaborated with designers and backend developers to deliver high-quality products.",
        "Implemented reusable components and optimized application performance."
      ]
    }
  ],
  education: [
    {
      degree: "Still In School",
      institution: "PhysicsWallah",
      period: "2023 - Till Date"
    }
  ]
};

function App() {
  const { name, title, contact, summary, skills, experience, education } = resumeData;

  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>
        <strong>Email:</strong> {contact.email} | <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Location:</strong> {contact.location} |{" "}
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
        <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <hr />
      <h3>Summary</h3>
      <p>{summary}</p>
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h3>Experience</h3>
      {experience.map((exp, idx) => (
        <div key={idx}>
          <strong>{exp.role}</strong> at <em>{exp.company}</em> <span>({exp.period})</span>
          <ul>
            {exp.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Education</h3>
      {education.map((edu, idx) => (
        <div key={idx}>
          <strong>{edu.degree}</strong>, {edu.institution} <span>({edu.period})</span>
        </div>
      ))}
    </div>
  );
}

export default App;