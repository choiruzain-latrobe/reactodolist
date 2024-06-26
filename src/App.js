import React, { useState } from 'react';

function TodoApp() {
    // State to store the list of tasks
    const [tasks, setTasks] = useState([]);
    // State to store the input value
    const [taskInput, setTaskInput] = useState('');

    // Function to add a new task
    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: taskInput }]);
            setTaskInput('');
        }
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    // Function to handle task input change
    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            {/* Input field to add a new task */}
            <input
                type="text"
                placeholder="Enter a task"
                value={taskInput}
                onChange={handleInputChange} // React event handling
            />
            {/* Button to add a new task */}
            <button onClick={addTask}>Add Task</button>
            {/* List of tasks */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {/* Display task text */}
                        {task.text}
                        {/* Button to delete a task */}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
