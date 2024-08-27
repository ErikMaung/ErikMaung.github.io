import React, { useState, useEffect } from 'react';
import './AnimatedList.css';

function AnimatedList() {
  const [items, setItems] = useState(['SoundSage MERN Stack Project', 'Generative Text LSTM Movie Review Generator', 'UCLA Undergraduate Research Week Presentation 2023 - VR Prism Adaptation']);
  const [links, setLinks] = useState(['https://github.com/ethanbresk/soundsage', 'https://github.com/ErikMaung/review-generator', 'https://www.youtube.com/watch?v=Etus7gOQbMQ']);
  const [items2, setItems2] = useState(['LinkedIn', 'E-Mail: erikmaung1@gmail.com', 'Phone: (626)-624-1560']);
  const [links2, setLinks2] = useState(['https://www.linkedin.com/in/erik-maung/', 'mailto:blank', undefined]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="list-container">
        <h2>My Resume</h2>
        <img className="resume" src={require('../images/resume.png')} />
      </div>
      <div className="flex">
        <div className="list-container">
          <h2>My Projects</h2>
          <ul className="animated-list">
            {items.map((item, index) => (
              <li key={index} className={`list-item ${animate ? 'animate' : ''}`}>
                <a href={links[index]} rel="noopener noreferrer">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-container">
          <h2>Contact</h2>
          <ul className="animated-list">
            {items2.map((item, index) => (
              <li key={index} className={`list-item ${animate ? 'animate' : ''}`}>
                <a href={links2[index]} rel="noopener noreferrer">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div >
    </>
  );
}

export default AnimatedList;
