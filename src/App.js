import React from "react"
import './App.css';

function App() {
const [calculation, setCalculation] = React.useState('');

const appendOperation = (value) => {
  const operatorPattern = /[+\-*/]/;
  if (calculation === '' && value === '0') {
    return;
  }
  if (value === '.') {
    const parts = calculation.split(operatorPattern);
    if (parts[parts.length - 1].includes('.')) {
      return;
    }
  }
  if (value !== '-' && operatorPattern.test(value)) {
    const lastChar = calculation[calculation.length - 1] || '';
    const secondLastChar = calculation[calculation.length - 2] || '';
    if (operatorPattern.test(lastChar)) {
      if (lastChar === '-' && operatorPattern.test(secondLastChar)) {
        setCalculation(calculation.slice(0, -2) + value);
        return;
      }
      setCalculation(calculation.slice(0, -1) + value);
      return;
    }
  }

  setCalculation(calculation + value);
};


const calculate = () => {
  setCalculation(eval(calculation).toString());
};

const clearAll = () => {
  setCalculation('');
};


  return (
    <div className='app'>
      <div className='grid'>
        <div id='display' className='display'>
          {calculation || '0'}
        </div>
        <div onClick={clearAll} id='clear' className='btn'>
          AC
        </div>
        <div
          onClick={() => appendOperation('/')}
          id='divide'
          className='btn operation'
        >
          /
        </div>
        <div
          onClick={() => appendOperation('*')}
          id='multiply'
          className='btn operation'
        >
          x
        </div>
        <div onClick={() => appendOperation('7')} id='seven' className='btn'>
          7
        </div>
        <div onClick={() => appendOperation('8')} id='eight' className='btn'>
          8
        </div>
        <div onClick={() => appendOperation('9')} id='nine' className='btn'>
          9
        </div>
        <div
          onClick={() => appendOperation('-')}
          id='subtract'
          className='btn operation'
        >
          -
        </div>
        <div onClick={() => appendOperation('4')} id='four' className='btn'>
          4
        </div>
        <div onClick={() => appendOperation('5')} id='five' className='btn'>
          5
        </div>
        <div onClick={() => appendOperation('6')} id='six' className='btn'>
          6
        </div>
        <div
          onClick={() => appendOperation('+')}
          id='add'
          className='btn operation'
        >
          +
        </div>
        <div onClick={() => appendOperation('1')} id='one' className='btn'>
          1
        </div>
        <div onClick={() => appendOperation('2')} id='two' className='btn'>
          2
        </div>
        <div onClick={() => appendOperation('3')} id='three' className='btn'>
          3
        </div>
        <div onClick={calculate} id='equals' className='btn'>
          =
        </div>
        <div onClick={() => appendOperation('0')} id='zero' className='btn'>
          0
        </div>
        <div onClick={() => appendOperation('.')} id='decimal' className='btn'>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
