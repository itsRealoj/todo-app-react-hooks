import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
