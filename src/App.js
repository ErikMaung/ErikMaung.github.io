import React, { useState } from 'react';
import { Container, Title, MantineProvider } from '@mantine/core';
import './App.css';
import CustomButton from './components/CustomButton';
import AnimatedList from './components/AnimatedList';


function App() {
  const [isFun, setIsFun] = useState(false);
  const [scaleValue, setScaleValue] = useState(1.1);

  const toggleFun = () => {
    setScaleValue(scaleValue === 1.1 ? 1.9 : 1.1);
    setIsFun(!isFun);
  };

  return (
    <MantineProvider className='root'>
      <Title className='warning'>
        This website is under renovations. A stable release will be issued by October 2024.
      </Title>
      <Container className="app-container">
        <Title className="app-title" order={1}>
          Erik Maung's Portfolio
        </Title>
        <div className="button-group">
          <CustomButton label="Home" type={isFun ? "danger" : "secondary"} href={"https://erikmaung.github.io/"} scaleValue={scaleValue} />
          <CustomButton label="Experimental" type={isFun ? "primary" : "secondary"} href={"https://erikmaung.github.io/experimental"} scaleValue={scaleValue} />
          <CustomButton label={isFun ? "Fun: ON" : "Fun: OFF"} type={isFun ? "success" : "secondary"} scaleValue={scaleValue} onClick={toggleFun} />
        </div>
        <AnimatedList />
      </Container>
      <Container className={`experiment rotate`} />
      <Container className="footer">
        &copy; Erik Maung 2024
      </Container>
    </MantineProvider>
  );
}

export default App;
