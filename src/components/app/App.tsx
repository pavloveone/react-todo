import './App.css';
import { TodosList } from '../todos-list/todos-list';
import React from 'react';

function App():JSX.Element {

  return (
    <div className="App">
      <TodosList />
    </div>
  );
}

export default App;