import React from 'react';
import Todo from './components/Todo';
// import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <p class="alert-success">To Do List</p>
      <Todo/>
      {/* <AddTodo/>   */}
    </div>
  );
}

export default App;