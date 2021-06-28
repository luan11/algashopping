import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sum, subtract } from './../../store/Calculator/Calculator.actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function handleSum() {
    dispatch(sum(a, b));
  }

  function handleSubtract() {
    dispatch(subtract(a, b));
  }

  return (
    <>
      <input
        type="text"
        placeholder="A"
        value={a}
        onChange={(event) => setA(Number(event.target.value))}
      />
      <input
        type="text"
        placeholder="B"
        value={b}
        onChange={(event) => setB(Number(event.target.value))}
      />

      <button type="button" onClick={handleSum}>
        Sum
      </button>

      <button type="button" onClick={handleSubtract}>
        Subtract
      </button>

      <div>{result}</div>
    </>
  );
};

export default Calculator;
