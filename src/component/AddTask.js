import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Tasks from './Tasks'; // Assuming both files are in the same directory




const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();
  


  const handleAddTask = () => {
    // Here you can add the task to your data source
    navigate('/'); // Navigate to the root route using useNavigate
  };

  return (
    <div>
      <h1>Add Task</h1>
      <div className="add-task-form">
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Home</button>
      </div>
    </div>
  );


  

};

export default AddTask;



