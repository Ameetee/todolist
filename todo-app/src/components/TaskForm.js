import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, currentTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name);
      setDescription(currentTask.description);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Both fields are required.');
      return;
    }

    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      name,
      description,
      completed: currentTask ? currentTask.completed : false
    };

    if (currentTask) {
      editTask(task);
    } else {
      addTask(task);
    }

    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
