import React from 'react';
import Todos from './components/Todo';
// import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <p class="alert-success">To Do List</p>
      <Todos/>
      {/* <AddTodo/>   */}
    </div>
  );
}

export default App;