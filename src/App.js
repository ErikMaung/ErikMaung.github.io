import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Container, Title, MantineProvider } from '@mantine/core';
import './App.css';
import './common.css';
import CustomButton from './components/CustomButton';
import RngButton from './components/RngButton';
import IncrementButton from './components/IncrementButton';
import AnimatedList from './components/AnimatedList';
import Speaker from './components/Speaker';
import Game from './Game';

function App() {
  const [isGame, setIsGame] = useState(false);
  const [scaleValue, setScaleValue] = useState(1.1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSpeakerOverlay, setShowSpeakerOverlay] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const year = "2025";
  const toggleGame = () => {
    setScaleValue(scaleValue === 1.1 ? 1.5 : 1.1);
    setIsGame(!isGame);
    if (!isGame) {
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 2500); // 2.5 sec
    }
  };

  return (
    <MantineProvider className='root'>
      <div className={`fade-container ${isGame ? 'active' : ''}`}>
        <Draggable>
          <Speaker isGame={isGame} isSpeakerOn={isSpeakerOn} setIsSpeakerOn={setIsSpeakerOn} />
        </Draggable>
      </div>
      <Title className='warning'>
        This website is under renovations. A stable release will be issued in early 2025.
      </Title>
      <Container className="app-container">
        <Title className="app-title" order={1}>
          Erik Maung's Homepage
        </Title>
        <div className="button-group">
          <CustomButton label="Home" type={"disabled"} scaleValue={1.0} />
          <CustomButton label="Portfolio" type={isGame ? "primary" : "secondary"} href={"https://erikmaung.github.io/portfolio"} scaleValue={scaleValue} />
          <CustomButton label={isGame ? "Game: ON" : "Game: OFF"} type={isGame ? "success" : "secondary"} scaleValue={scaleValue} onClick={toggleGame} />
        </div>
        <AnimatedList />
      </Container>
      <Container className={`experiment rotate`} />
      <div className={`fade-container ${isGame ? 'active' : 'no-space'}`}>
        <Game scaleValue={scaleValue} />
      </div>
      
        <div className={`overlay-message overlay-center overlay-top ${showOverlay ? '' : 'hide'}`}>
          Scroll to the bottom to play the game!
        </div>
      
      <Container className="footer">
        &copy; Erik Maung 2025
      </Container>
    </MantineProvider>
  );
}

export default App;
