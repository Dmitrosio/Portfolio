import React from 'react';
import "./Home.css";
import myImage from './MugShot.jpg';
import Contact from './Contact.tsx';
import projPrev from './ProjectsPrev.png';

export default function Home() {
  return (
      <div className="home">
        <div className='header'>
          <h1>Hi, I'm Dmitrii</h1>
          <h2>Welcome to my portfolio website!</h2>
        </div>
        <div className="content">
          <Contact/>
          <div className="text">
            <p>I am a student at the University of Advancing Technology and an alumni of the New Apprenticeship Bootcamp,
              where I have developed a deep understanding of software development and work with databases.
              I am a creative, consistent, goal-oriented, technology-passionate developer,
              who believes technological advancement is the future of our world.
            </p>
          </div>
          <div className="image">
            <img src={myImage} alt="Dmitrii's profile picture" />
          </div>
        </div>
        <div className="case">
          <div className="case-content">
            <p className='prevTitle'>Projects</p>
            <p>Discover the diverse range of projects we've passionately crafted, showcasing our expertise in web development, design, and innovation. From sleek and intuitive user interfaces to robust backend solutions, our portfolio reflects our commitment to delivering high-quality and impactful solutions. Each project is a testament to our creativity, problem-solving skills, and dedication to exceeding client expectations. Explore the rich tapestry of our work below and witness the unique stories behind each endeavor.</p>
            <a href='Projects'>Click to see more...</a>
          </div>
            <img src={projPrev} alt="Preview of projects" />
        </div>
        <div className="case">
          <div className="case-content">
            <p className='prevTitle'>Projects</p>
            <p>Discover the diverse range of projects we've passionately crafted, showcasing our expertise in web development, design, and innovation. From sleek and intuitive user interfaces to robust backend solutions, our portfolio reflects our commitment to delivering high-quality and impactful solutions. Each project is a testament to our creativity, problem-solving skills, and dedication to exceeding client expectations. Explore the rich tapestry of our work below and witness the unique stories behind each endeavor.</p>
            <a href='Projects'>Click to see more...</a>
          </div>
            <img src={projPrev} alt="Preview of projects" />
        </div>
      </div>
  );
}