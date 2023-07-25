import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = (): JSX.Element => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
