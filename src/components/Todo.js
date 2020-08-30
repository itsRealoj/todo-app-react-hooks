import React, { useState } from 'react';

//extract text from each todo
const Todo = ({ todo, index, completeTodo }) =>
    (
        // apply style if the todo is marked completed
    <div> 
        <div style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            {todo.text}
        </div>
        <div><button onClick={() => completeTodo(index)}>
        complete</button></div>
    </div>
    )

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
                <input placeholder="new todo" value={value} onChange={e => setValue(e.target.value)}/><span><button type="submit">Add Todo</button></span>
            </div>
        </form>
    )
}

const Todos = () => {
    const [todos, setTodos] = useState([
        {text: "Code react todo-list app", isCompleted: false}, 
        {text: "Create tic tac toe game", isCompleted: false},
        {text: "Go to the gym", isCompleted: false}
    ]); 

    //add new todos
    const AddTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    } 

    //completing a todo
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    return(
        <div className="container">
            <form>
                <div>
                    <div>
                        {(todos.map((todo, index) => <Todo todo={todo} index={index} key={index} completeTodo={completeTodo}/>))}
                    </div>
                </div>
            </form>
            <TodoForm AddTodo={AddTodo}/>
        </div>
    )
}

export default Todos;