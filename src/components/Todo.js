import React, { useState, useCallback } from 'react';

const todo = ({ todo }) => <div> {todo.text} </div>

function Todo() {
    const [todos, setTodos] = useState([
        {text: "Code react todo-list app"},
        {text: "Create tic tac toe game"},
        {text: "go to the gym"}
    ]);

    //const Todo = ({todos}) => <div>todos[1].text</div>

    return(
        <div className="container">
            <form>
                <div>
    <div>{(todos.map(todo => <div>{todo.text}</div>))}</div>
                </div>
            </form>
        </div>
    )
}

export default Todo;