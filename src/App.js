import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoContext, TodoContextProvider } from './contexts/TodoContext';

import { Todo } from './components/Todo';

function App() {
	return (
		<div className='App'>
			<TodoContextProvider>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<Todo />
				</header>
			</TodoContextProvider>
		</div>
	);
}

export default App;
