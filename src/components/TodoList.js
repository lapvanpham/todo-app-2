import Todo from './Todo';

export default function TodoList({ todos, setTodos }) {
	console.log('list', setTodos);
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							text={todo.text}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
						/>
					);
				})}
			</ul>
		</div>
	);
}
