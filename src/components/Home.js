import React from 'react';
import "./Home.css";
import Contact from './Contact.tsx';
import projPrev from './ProjectsPrev.png';
import aboutPrev from './AboutPrev.png';
import resunePrev from './resumePrev.png';
import reachPrev from './reachPrev.png';

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
            <p>Discover the diverse range of projects I've passionately crafted, showcasing our expertise in web development, design, and innovation. From sleek and intuitive user interfaces to robust backend solutions, my portfolio reflects my commitment to delivering high-quality and impactful solutions.</p>
            <a href='Projects'>Click to see more...</a>
          </div>
            <img src={projPrev} alt="Preview of projects" />
        </div>
        <div className="case">
          <div className="case-content">
            <p className='prevTitle'>About Me</p>
            <p>In this section, I offer a glimpse into the facets that define me beyond the professional realm. Dive into my world as I share my hobbies, interests, and the passions that fuel my everyday life.</p>
            <a href='About'>Click to see more...</a>
          </div>
            <img src={aboutPrev} alt="Preview of about me" />
        </div>
        <div className="case">
          <div className="case-content">
            <p className='prevTitle'>Resume</p>
            <p>In this section of my resume, I provide a comprehensive glimpse into the facets that define my professional journey. Delve into the core of my career as I articulate my skills, experiences, and achievements. From navigating complex projects to leveraging innovative solutions, join me on this professional exploration where I showcase the threads of my diverse expertise and accomplishments.</p>
            <a href='Resume'>Click to see more...</a>
          </div>
            <img src={resunePrev} alt="Preview of projects" />
        </div>
        <div className="case">
          <div className="case-content">
            <p className='prevTitle'>Reach Me</p>
            <p>On my "Reach Me" page, I extend an invitation for connection beyond the professional landscape. Explore this space as I open the door to communication and engagement. Whether you have inquiries, collaboration proposals, or simply want to share ideas, join me on this interactive platform where connections flourish. From discussions on industry trends to exchanging insights, this is a space where the boundaries between professional networking and meaningful interactions blur.</p>
            <a href='ReachMe'>Click to see more...</a>
          </div>
            <img src={reachPrev} alt="Preview of projects" />
        </div>
      </div>
  );
}