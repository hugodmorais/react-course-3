import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicked');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - run every time the component updates
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // With dependency - run every time the dependency changes
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>
        C1: {counter} C2: {counter2}{' '}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
