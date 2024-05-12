import React, { useState } from 'react';

function TodoApp() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the input value for adding tasks
  const [taskInput, setTaskInput] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== '') { // Check if input is not empty
      setTasks([...tasks, { id: Date.now(), text: taskInput }]); // Add new task to tasks state
      setTaskInput(''); // Clear input field after adding task
    }
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Filter out task with given id
  };

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setTaskInput(event.target.value); // Update taskInput state with new value
  };

  return (
      <div>
        <h1>To-Do List</h1>
        {/* Input field for adding new tasks */}
        <input
            type="text"
            placeholder="Enter a task"
            value={taskInput}
            onChange={handleInputChange} // Call handleInputChange on input change
        />
        {/* Button to add a new task */}
        <button onClick={addTask}>Add Task</button>
        {/* List of tasks */}
        <ul>
          {tasks.map(task => (
              <li key={task.id}>
                {/* Display task text */}
                {task.text}
                {/* Button to delete task */}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoApp;
