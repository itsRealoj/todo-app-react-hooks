import React, { useReducer, createContext } from 'react';

//create context object
export const TodoContext = createContext();

const initState = {
	todos: [
		{
			id: 0,
			text: 'Learn DotNet Later in the day.',
		},
	],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			throw new Error();
	}
};
