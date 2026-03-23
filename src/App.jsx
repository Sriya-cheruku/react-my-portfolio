import React, { useState } from "react";
import "./App.css";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

 const projects = [
  {
    id: 1,
    title: "My First React Portfolio",
    desc: "This is my first React project where I learned about components, state, and how to structure a simple app.",
  },
  {
    id: 2,
    title: "Student Task Tracker",
    desc: "A simple app to manage daily tasks like assignments and study plans. Helped me practice React state and list rendering.",
  },
  {
    id: 3,
    title: "Tip Calculator",
    desc: "A small app that calculates tip amount based on bill and percentage. Built to practice JavaScript logic.",
  },
];
  const [showMore, setShowMore] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <p>React Beginner Portfolio</p>

      <section>
        <h2>Profile</h2>
        <p>Name: Sriya</p>
        <p>Role: Frontend Developer Intern</p>
        <p>Location: Hyderabad</p>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
  Hi, I'm Sriya . I'm currently learning React and exploring web development.
  I enjoy creating simple websites and slowly improving my skills every day.
  My goal is to become a full-stack developer and work on real-world projects.
</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>More Info</h2>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Hide More" : "Show More"}
        </button>

        {showMore && (
  <div>
    <p>Hobbies: Watching tech videos, coding, music </p>
    <p>Goal: Become a confident developer</p>
    <p>Favorite thing: Building UI in React</p>
  </div>
)}
        
      </section>

      <section>
  <h2>Contact</h2>

  {submitted ? (
    <p className="success">
      Thank you {name}, your message has been received.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  )}
</section>
    </div>
  );
}

export default App;