import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { name: newTask, completed: false }]); // Updated to use object for task
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }


  return (
    <div>
      <h1>Tasks</h1>
      <ul className="task-list"> 
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.completed ? 'completed' : ''}`}> 
            <span onClick={() => handleToggleTask(index)}>{task.name}</span> 
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" onKeyDown={handleKeyDown} value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button className='btn' onClick={handleAddTask}>Add Task</button>
      {/* <Link to="/add">Add Task (Alternative)</Link> */}
    </div>
  );
};

export default Tasks;


