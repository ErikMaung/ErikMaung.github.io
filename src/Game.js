import React, { useState } from 'react';
import './Game.css';
import './common.css'
import RngButton from './components/RngButton';
import IncrementButton from './components/IncrementButton';
import Shop from './components/Shop';
import { Container, Title, MantineProvider } from '@mantine/core';

const Game = ({ scaleValue }) => {
    const [points, setPoints] = useState(0.0);
    const [wantsToPlay, setWantsToPlay] = useState(false);
    const [incrementAmt, setIncrementAmt] = useState(1.0);
    const [mps, setMps] = useState(0.0);
    return (
        <Container>
            <div className="button-group vertical scaling" >
                <RngButton type={"primary"} scaleValue={scaleValue} />
                <IncrementButton type={"danger"} scaleValue={scaleValue} incrementAmt={incrementAmt} setWantsToPlay={setWantsToPlay} setPoints={setPoints} points={points} />
            </div >
            {wantsToPlay ? <div className="button-group">
                <Shop scaleValue={scaleValue} setIncrementAmt={setIncrementAmt} incrementAmt={incrementAmt} mps={mps} setMps={setMps} points={points} setPoints={setPoints} />
            </div> : undefined}
        </Container>
    )
};

export default Game;