import React, { useState, useContext } from 'react';
import { v4 as todoId } from 'uuid';

import { TodoContext } from '../contexts/TodoContext';

export const Todo = () => {
	const [state, dispatch] = useContext(TodoContext);
	const [text, setText] = useState('');

	const delTodo = (id) => {
		dispatch({
			type: 'DONE_TODO',
			payload: id,
		});
	};
};
