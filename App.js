import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
      </header>
      <section className="Main-section">
        <div className="About">
          <h2>About Me</h2>
          <p>I am a passionate full stack developer with expertise in React, Node.js, and Express.js. I love building scalable web applications that solve real-world problems.</p>
        </div>
        <div className="Experience">
          <h2>Experience</h2>
          <div className="Job">
            <h3>Senior Software Engineer</h3>
            <p>ABC Company (2018 - Present)</p>
            <ul>
              <li>Developed and maintained web applications using React.js and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Implemented RESTful APIs for seamless data exchange between front-end and back-end systems.</li>
            </ul>
          </div>
          <div className="Job">
            <h3>Software Engineer</h3>
            <p>XYZ Corporation (2015 - 2018)</p>
            <ul>
              <li>Designed and developed user-friendly interfaces using React.js and Redux.</li>
              <li>Optimized application performance through code refactoring and performance tuning.</li>
              <li>Participated in code reviews and provided constructive feedback to team members.</li>
            </ul>
          </div>
        </div>
        <div className="Projects">
          <h2>Projects</h2>
          <div className="Project">
            <h3>E-commerce Website</h3>
            <p>A full-stack e-commerce website built with React, Node.js, and MongoDB.</p>
            <a href="https://github.com/username/e-commerce-project">GitHub Repository</a>
          </div>
          <div className="Project">
            <h3>Task Management App</h3>
            <p>A task management application developed using React and Firebase.</p>
            <a href="https://github.com/username/task-management-app">GitHub Repository</a>
          </div>
        </div>
        <div className="Skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>HTML5 & CSS3</li>
            <li>RESTful APIs</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>
      <footer className="App-footer">
        <p>Contact: saurabh.guptajhs01@gmail.com</p>
        <p>GitHub: <a href="https://saurabhguptajhs01.github.io/">github.com/saurabh.guptajhs01</a></p>
      </footer>
    </div>
  );
}

export default App;
