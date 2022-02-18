export default function Todo({ text, todo, todos, setTodos }) {
	console.log('todo', setTodos);
	function deleteHandler() {
		setTodos(todos.filter((el) => el.id !== todo.id));
	}

	return (
		<div className='todo'>
			<li className='todo-item'>{text}</li>
			<button className='complete-btn'>
				<i className='fas fas-check'></i>
			</button>

			<button className='trash-btn' onClick={deleteHandler}>
				<i className='fas fas-trash'></i>
			</button>
		</div>
	);
}
