import React from "react";
import { FaPlus } from "react-icons/fa";

const TaskInput = ({
  taskPriority,
  taskStatus,
  taskValue,
  handleTaskInput,
  dateValue,
  handleDateInput,
  priorityValue,
  handlePriorityInput,
}) => {
  return (
    <form className="flex flex-col justify-center items-center gap-4 border-2 border-black rounded-3xl p-4">
      <label
        htmlFor="task"
        className="absolute left-[-99999px]"
        onSubmit={(e) => e.preventDefault()}
      >
        task name
      </label>
      <input
        onChange={handleTaskInput}
        type="text"
        name="task"
        id="task"
        placeholder="enter a new task"
        className="border-2 border-black rounded-3xl h-10 px-2 focus:outline-none focus:ring focus:ring-green-400"
        value={taskValue}
      />

      <label htmlFor="date" className="absolute left-[-99999px]">
        date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="border-2 border-black rounded-3xl h-10 px-2  focus:outline-none  focus:ring focus:ring-green-400"
        value={dateValue}
        onChange={handleDateInput}
      />

      <label htmlFor="priority" className="absolute left-[-99999px]">
        priority
      </label>
      <select
        name="priority"
        id="priority"
        className="border-2 border-black rounded-3xl h-10 px-2 focus:outline-none focus:ring focus:ring-green-400"
        value={priorityValue}
        onChange={handlePriorityInput}
      >
        {Object.entries(taskPriority).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
      <label htmlFor="status" className="absolute left-[-99999px]">
        status
      </label>
      <select
        name="status"
        id="status"
        className="border-2 border-black rounded-3xl h-10 px-2 focus:outline-none focus:ring focus:ring-green-400"
      >
        {Object.entries(taskStatus).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>

      <FaPlus
        role="button"
        tabIndex="0"
        aria-label="Add task"
        className="text-2xl hover:text-green-400 active:text-green-600 focus:text-green-600"
      />
    </form>
  );
};

export default TaskInput;
