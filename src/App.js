import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoContext, TodoContextProvider } from './contexts/TodoContext';

function App() {
	return (
		<div className='App'>
			<TodoContextProvider>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					TODO APPLICATION
					<div>
						<ul>
							<li>first todo</li>
							<li>second todo</li>
							<li>third todo</li>
						</ul>
					</div>
				</header>
			</TodoContextProvider>
		</div>
	);
}

export default App;
