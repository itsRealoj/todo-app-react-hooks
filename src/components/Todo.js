import React, { useState, useCallback } from 'react';

//extract text from each todo
const Todo = ({ todo }) => <div> {todo.text}</div>

//todo form
function TodoForm({AddTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        AddTodo(value);
        setValue("");
    };  

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder="new todo" value={value} onChange={e => setValue(e.target.value)}/><span><button>Add Todo</button></span>
            </div>
        </form>
    )
}

function Todos() {
    const [todos, setTodos] = useState([
        {text: "Code react todo-list app"}, 
        {text: "Create tic tac toe game"},
        {text: "Go to the gym"}
    ]);

    //add new todos
    const AddTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    } 

    return(
        <div className="container">
            <form>
                <div>
                    <div>
                        {(todos.map((todo) => <Todo todo={todo}/>))}
                    </div>
                    
                </div>
            </form>
            <TodoForm AddTodo={AddTodo}/>
        </div>
    )
}

export default Todos;