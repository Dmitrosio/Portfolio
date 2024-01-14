import React from "react";
import './About.css';
import pic from './Picture.JPG';
import bike from './Yamaha.jpg';
import class_pic from './class_pic.jpg';

export default function About() {
    return(
            <div className="about-me">
                <div className="image-holder">
                    <img src={pic} alt="oops"></img>
                </div>
                <div className='about-me-text'>
                    <h2>Hi, I'm Dmitrii</h2>
                    <p >
                        I have been passionate about programming since I was 14. I have dedicated my life to creating software. Embracing the ever-evolving world of technology, I find joy in crafting innovative solutions and exploring the endless possibilities that programming offers.
                    </p>
                    <h2>University Life</h2>
                    <p>
                        Currently I am a student at the University of Advancing Technology where I am studying Advanced Computer Science and Artificial Intelligence. I am graduating Summer 2024.
                    </p>
                    <img src={class_pic} alt="oops"></img>
                    <h2>My Hobbies</h2>
                    <p>Recently I have purchased a 1982 Yamaha Virago 500 for parts. It was a random thing that I have never thought of but I have decided to get my first bike and build it from scratch. Picture below is a finished motorcycle but I will get there too!</p>
                    <img src={bike} alt="oops"></img>
                    <p></p>
                </div>
            </div>
    );
}