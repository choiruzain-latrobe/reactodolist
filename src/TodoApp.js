import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);

    const addTask = () => {
        if (taskInput.trim() !== '') {
            if (editTaskId !== null) {
                // Update existing task
                const updatedTasks = tasks.map(task =>
                    task.id === editTaskId ? { ...task, text: taskInput } : task
                );
                setTasks(updatedTasks);
                setEditTaskId(null);
            } else {
                // Add new task
                setTasks([...tasks, { id: Date.now(), text: taskInput }]);
            }
            setTaskInput('');
        }
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const editTask = (taskId, taskText) => {
        setTaskInput(taskText);
        setEditTaskId(taskId);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Enter a task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>{editTaskId !== null ? 'Edit Task' : 'Add Task'}</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
