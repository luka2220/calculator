import React, { useState } from 'react';

import './Calculator.css';

const Calculator = () => {

  const [result, setResult] = useState('');

  let equation;

  const updateResult = (x) => {
    equation = result + x;
    console.log(equation);
    setResult(equation);
  }

  const clearScreen = () => {
    setResult('');
  }

  const evaluate = (equ) => {
    let res = eval(equ);
    setResult(res);

    console.log(`ans = ${res}`);
  }

  return (
    <div className="calculator">
      <div>
        <h2 className="result">{result}</h2>
      </div>
          
      <div className='center'>
        <div>
          <button className='button-clear' onClick={clearScreen}>AC</button>
        </div>
        <div>
          <button className='button' onClick={() => updateResult('7')}>7</button>
          <button className='button' onClick={() => updateResult('8')}>8</button>
          <button className='button' onClick={() => updateResult('9')}>9</button>
          <button className='button' onClick={() => updateResult('*')}>x</button>
        </div>
        <div>
          <button className='button' onClick={() => updateResult('4')}>4</button>
          <button className='button' onClick={() => updateResult('5')}>5</button>
          <button className='button' onClick={() => updateResult('6')}>6</button>
          <button className='button' onClick={() => updateResult('+')}>+</button>
        </div>
        <div>
          <button className='button' onClick={() => updateResult('1')}>1</button>
          <button className='button' onClick={() => updateResult('2')}>2</button>
          <button className='button' onClick={() => updateResult('3')}>3</button>
          <button className='button' onClick={() => updateResult('/')}>/</button>
        </div>
        <div>
          <button className='button' onClick={() => updateResult('0')}>0</button>
          <button className='button' onClick={() => updateResult('.')}>.</button>
          <button className='button' onClick={() => updateResult('-')}>-</button>
          <button className='button' onClick={() => evaluate(result)}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;