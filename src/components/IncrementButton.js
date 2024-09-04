import React from 'react';
import { Button } from '@mantine/core';
import { useState } from 'react';
import './IncrementButton.css';

function IncrementButton({ type, scaleValue }) {
  const status = 0;
  const [increment, setincrement] = useState(status);
  const handleincrement = (event) => {
    if (event.shiftKey) {
      setincrement(increment - 1);
    } else
      setincrement(increment + 1);
  }

  return <Button
    className={`custom-button ${type}`}
    radius="xl"
    size="xl"
    style={{
      '--scale-value': scaleValue,
    }}
    onClick={handleincrement}
  >
    {increment}
  </Button>
};

export default IncrementButton;
