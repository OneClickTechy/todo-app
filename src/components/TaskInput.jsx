import React from "react";
import { FaTimes, FaPlus, FaSave} from "react-icons/fa";

const TaskInput = ({
  taskPriority,
  taskStatus,
  taskValue,
  handleTaskInput,
  dateValue,
  handleDateInput,
  priorityValue,
  handlePriorityInput,
  statusValue,
  handleStatusInput,
  handleSubmit,
  editMode,
  handleTaskEdit,
  handleCancel,
}) => {
  return (
    
    <form id="inputForm"
    className="relative flex flex-col justify-center items-center gap-6 border-2 border-black rounded-3xl p-4 text-green-700 m-4 max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
    onSubmit={(e) => e.preventDefault()}
  >
    <h2 className="text-2xl font-bold underline text-green-700">
      {!editMode ? "Add Task" : "Edit Task"}
    </h2>
    
    <FaTimes 
      className="absolute top-4 right-4 text-2xl hover:text-green-400 active:text-green-600 focus:text-green-600 cursor-pointer"
      onClick={handleCancel}
    />
    
    <label htmlFor="task" className="sr-only">
      Task Name
    </label>
    <input
      onChange={handleTaskInput}
      type="text"
      name="task"
      id="task"
      placeholder="Enter a new task"
      className="border-2 border-black rounded-3xl h-10 px-4 focus:outline-none focus:ring focus:ring-green-400 placeholder:text-green-700/50 w-full"
      value={taskValue}
    />
  
    <label htmlFor="date" className="sr-only">
      Due Date
    </label>
    <input
      type="date"
      name="date"
      id="date"
      className="border-2 border-black rounded-3xl h-10 px-4 focus:outline-none focus:ring focus:ring-green-400 text-green-700 w-full"
      value={dateValue}
      onChange={handleDateInput}
    />
  
    <label htmlFor="priority" className="sr-only">
      Task Priority
    </label>
    <select
      name="priority"
      id="priority"
      className="border-2 border-black rounded-3xl h-10 px-4 focus:outline-none focus:ring focus:ring-green-400 text-green-600 w-full"
      value={priorityValue}
      onChange={handlePriorityInput}
    >
      <option value="" disabled>
        --- Select Priority ---
      </option>
      {Object.entries(taskPriority).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  
    <label htmlFor="status" className="sr-only">
      Task Status
    </label>
    <select
      name="status"
      id="status"
      className="border-2 border-black rounded-3xl h-10 px-4 focus:outline-none focus:ring focus:ring-green-400 text-green-600 w-full"
      value={statusValue}
      onChange={handleStatusInput}
    >
      <option value="" disabled>
        --- Select Status ---
      </option>
      {Object.entries(taskStatus).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  
    {editMode ? (
      <FaSave 
        role="button"
        tabIndex="0"
        aria-label="Save task"
        className="text-2xl hover:text-green-400 active:text-green-600 focus:text-green-600 text-green-700 cursor-pointer"
        onClick={editMode ? handleTaskEdit : handleSubmit}
      />
    ) : (
      <FaPlus
        role="button"
        tabIndex="0"
        aria-label="Add task"
        className="text-2xl hover:text-green-400 active:text-green-600 focus:text-green-600 text-green-700 cursor-pointer"
        onClick={editMode ? handleTaskEdit : handleSubmit}
      />
    )}
  </form>
  
  );
};

export default TaskInput;
