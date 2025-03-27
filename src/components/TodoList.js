import React, { useState } from 'react';
import Counter from './Counter'; //Import Counter for new completion tracker

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [completedCount, setCompletedCount] = useState(0); // State to track completed todos

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i)=> i !== index));
    }

    function handleComplete(index) {
        setCompletedCount(completedCount + 1); // Increment completed count
        handleDelete(index); // Remove the todo from the list
    }
    
    return (
        <div className="todo-list-container">
            <h2>Todo List</h2>

        <div className="todo-input">
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            
            <button onClick={handleSubmit}>Add Todo</button>
        </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleComplete(index)}>Complete</button> {/* button to mark todo as complete */}
                    </li>
                ))}
            </ul>
            
            <Counter count={completedCount} /> {/* show completed count */}
        </div>
    );
}

export default TodoList;