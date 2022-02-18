import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	function inputTextHandler(e) {
		setInputText(e.target.value);
	}
	function submitTodoHandler(e) {
		e.preventDefault();
		setTodos((prev) => [
			...prev,
			{ text: inputText, complted: false, id: Math.random() * 10000 },
		]);
		setInputText('');
	}
	return (
		<form onSubmit={submitTodoHandler}>
			<input
				value={inputText}
				type='text'
				className='todo-input'
				onChange={inputTextHandler}
			/>
			<button className='todo-button' onClick={submitTodoHandler} type='submit'>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
