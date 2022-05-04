import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'The title that context',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'temporary': {
      console.log('Called change com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Called invert');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('NO ACTION FOUND...');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>
        SEM ACTION
      </button>
    </div>
  );
}

export default App;
