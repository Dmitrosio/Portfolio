import React from 'react';
import "./Home.css";
import Contact from './Contact.tsx';
import projPrev from './ProjectsPrev.png';
import aboutPrev from './AboutPrev.png';

export default function Home() {
  return (
      <div className="home">
        <div className='header'>
          <h1>Dmitrii Orlov</h1>
          <h2>Software Engineer and Developer</h2>
          <Contact/>
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
            <p className='prevTitle'>About Me</p>
            <p>In this section, I offer a glimpse into the facets that define me beyond the professional realm. Dive into my world as I share my hobbies, interests, and the passions that fuel my everyday life. From exploring the outdoors to delving into the realms of literature, join me on this personal journey where I weave together the threads of my diverse interests and experiences.</p>
            <a href='About'>Click to see more...</a>
          </div>
            <img src={aboutPrev} alt="Preview of projects" />
        </div>
      </div>
  );
}