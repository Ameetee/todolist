import React from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
      </button>
    </div>
  );
};

export default TaskItem;
