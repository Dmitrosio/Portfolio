import React from 'react';
import "./Home.css";
import myImage from './MugShot.jpg';
import Contact from './Contact.tsx';

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
          <img src={myImage} alt='This was supposed to be me:/' />
        </div>
      </div>
    </div>
  );
}