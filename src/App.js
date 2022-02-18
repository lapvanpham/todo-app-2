import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	console.log('app', setTodos);
	return (
		<div className='App'>
			<header>
				<h1>Lap's Todo List</h1>
			</header>
			<Form
				setInputText={setInputText}
				setTodos={setTodos}
				inputText={inputText}
				todos={todos}
			/>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
