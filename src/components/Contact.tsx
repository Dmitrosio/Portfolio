import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Contact.css"
import React from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav className="menu" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Contact Information
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)"
        }}
      >
        <li><FaPhone /> (612)-517-4358</li>
        <li><FaEnvelope /> dimaorlov2002@gmail.com</li>
        <li> <a href="https://www.linkedin.com/in/dmitrii-orlov-53b903240/">
            <FaLinkedin /> LinkedIn Profile
            </a>
        </li>
            
        <li><a href="https://github.com/Dmitrosio">
            <FaGithub /> GitHub Page
          </a></li>
      </ul>{" "}
    </nav>
  );
}
