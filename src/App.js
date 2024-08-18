import { useState, useEffect, useRef } from 'react';
import { Collapse } from '@mantine/core';
import './App.css';
import ImageGallery from './components/gallery';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <title>
        Erik Maung
      </title>

      <head>
        <link rel="stylesheet" href="App.css" />
      </head>

      <body>
        <h1 style={{ "text-align": "center" }}>ERIK MAUNG'S PORTFOLIO</h1>
        <h2>Projects<span class="extra">&nbsp;and
          <a href="https://github.com/erikmaung">GitHub Page</a>
        </span>
        </h2>
        <ul>
          <li><a href="https://github.com/ErikMaung/review-generator">
            <b>Movie Review Generator: </b>github.com/ErikMaung/review-generator
          </a></li>
          <ul>
            <li><b>Tools: </b>Python, Jupyter Notebook, Google Colaboratory</li>
            <li><b>Notes: </b>LSTM-based text generation model that writes movie reviews.</li>
          </ul>

          <li><a href="https://github.com/ethanbresk/soundsage">
            <b>SoundSage Blog: </b>github.com/ethanbresk/soundsage
          </a></li>
          <ul>
            <li><b>Tools: </b>HTML, CSS, JavaScript, JSX, MongoDB, Express.js, React.js, Node.js, Spotify API</li>
            <li><b>Notes: </b>MERN Stack blog site with Spotify API integration, authentication and security features.
              Project manager and frontend developer among team of 5 developers.</li>
            <li><b>Resource: </b>
              <a href="https://www.youtube.com/watch?v=bBCcHEBIWXM">Fall 2023
                Demo Presentation</a>
            </li>
          </ul>

          <li><a href="https://github.com/ErikMaung/portfolio-general/tree/main">
            <b>Basic Programming Portfolio: </b>GitHub Repo
          </a></li>
          <ul>
            <li><b>Tools: </b>C++, Python, Visual Studio Code, Google Colaboratory</li>
            <li><b>Notes: </b>Coding Projects from Classwork: Data Structures & Algorithms, Physics Laboratory
              Assignments</li>
          </ul>



          <li><a href="https://drive.google.com/drive/u/0/folders/1akidzHtkFEkrcYm67u07k4Xnw9ocBLoZ">
            <b>Graphic Design Portfolio: </b>Google Drive</a></li>
          <ul>
            <li><b>Tools: </b>Corel (Gravit) Designer (similar to Adobe Illustrator Software)</li>
            <li><b>Notes: </b>Compilation of Design Projects for Clubs and Personal Projects</li>
            <li><b>Resource: </b>
              <a href="https://cloud.gravit.io/signin">Corel (Gravit) Designer</a>
            </li>
          </ul>

          <li><a href="https://drive.google.com/drive/u/0/folders/11nceOQ4rHi_05AY9zKgdybDbYl9QaK5I">
            <b>3D Modeling Portfolio: </b>Google Drive</a></li>
          <ul>
            <li><b>Tools: </b>Blender 3D</li>
            <li><b>Notes: </b>Compilation of Tutorial-Based Work, 3D Research Assets, and Personal Projects</li>
            <li><b>Resource: </b>
              <a href="https://www.youtube.com/channel/UCOKHwx1VCdgnxwbjyb9Iu1g">Andrew Price's Blender 3D
                Tutorials</a>
            </li>
          </ul>
        </ul>

        <h2>Research and Project Presentations</h2>

        <iframe width="40%" height="40%" src="https://www.youtube.com/embed/bBCcHEBIWXM" title="SoundSage Presentation"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>

        <iframe width="40%" height="40%" src="https://www.youtube.com/embed/Etus7gOQbMQ"
          title="neuroscience: Prerecorded presentation - Panel 2, Presentation 2" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>

        <h2 onClick={toggleCollapse}>Graphic Design Visual Portfolio</h2>
        <ImageGallery />

        <Collapse isOpen={isOpen}>
          <p>awethog</p>
        </Collapse>

      </body>
    </>
  );
}

export default App;
