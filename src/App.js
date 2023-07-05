import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './card';

function App() {
	const [users, setUsers] = React.useState([]);

	const loadUsers = async () => {
		try {
			const response = await fetch("https://reqres.in/api/users?page=1");
			if (!response.ok) {
				throw new Error("Failed to fetch users");
			}
			const jsonResponse = await response.json();
			setUsers(jsonResponse.data);
		} catch (error) {
			// Handle error appropriately (e.g., show an error message)
			console.error(error);
		}
	};
	
	return (
		<>
			<header>
				<h1 className='heading'>Sangyan</h1>
				<button className='btn' onClick={loadUsers}>Get List</button>
			</header>
			
			<div className='maincontent'>
				{users.map((item) => {
					return (
						<Card {...item}/>
						)
					})}
			</div>
			
		</>
	);
}

export default App;
