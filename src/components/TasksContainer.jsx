import React from "react";

const TasksContainer = ({ tasks, setTasks }) => {
  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            
            {task.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default TasksContainer;
