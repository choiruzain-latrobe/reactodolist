import React, { useState } from 'react';

function TodoApp() {
    // Define state variables using the useState hook
    const [tasks, setTasks] = useState([]); // Array to store tasks
    const [taskInput, setTaskInput] = useState(''); // Input value for new task
    const [editTaskId, setEditTaskId] = useState(null); // ID of task being edited

    // Function to add or edit a task
    const addTask = () => {
        if (taskInput.trim() !== '') {
            if (editTaskId !== null) {
                // Update existing task if editTaskId is not null
                const updatedTasks = tasks.map(task =>
                    task.id === editTaskId ? { ...task, text: taskInput } : task
                );
                setTasks(updatedTasks); // Update tasks array with updated task
                setEditTaskId(null); // Reset editTaskId
            } else {
                // Add new task if editTaskId is null
                setTasks([...tasks, { id: Date.now(), text: taskInput }]);
            }
            setTaskInput(''); // Clear task input
        }
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        // Filter out the task with the specified ID
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    // Function to edit a task
    const editTask = (taskId, taskText) => {
        setTaskInput(taskText); // Set task input value to the text of the task being edited
        setEditTaskId(taskId); // Set editTaskId to the ID of the task being edited
    };

    return (
        <div>
            <h1>To-Do List</h1>
            {/* Input field for entering new tasks */}
            <input
                type="text"
                placeholder="Enter a task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            {/* Button to add or edit a task */}
            <button onClick={addTask}>{editTaskId !== null ? 'Edit Task' : 'Add Task'}</button>
            {/* List of tasks */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        {/* Button to delete a task */}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        {/* Button to edit a task */}
                        <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
