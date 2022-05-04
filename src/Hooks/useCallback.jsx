import P from 'prop-types';
import './App.css';
import React, { useState, useCallback } from 'react';

// React.memo gives us a kind of cache
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Child, rendered');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

// Function rendered every time the block renders
function App() {
  const [counter, setCounter] = useState(0);
  // useCallback will guarantee that the func will be returned only once, because we dont have dependencies and setCounter uses arrow function
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
