import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
const TasksContainer = ({
  tasks,
  taskPriority,
  taskStatus,
  handleDeleteTask,
  handleEditTask,
}) => {
  return (
    <section className="w-full p-4">
      {tasks.length ? (
        <ul className="grid grid-cols-1 w-full gap-4 md:grid-cols-2 lg:grid-cold-3 xl:grid-cols-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border-l-4 rounded-l-md rounded-r-md border-green-600 p-4 bg-green-200 text-nowrap w-full  max-w-full flex flex-col gap-4 "
            >
              <p
                className="capitalize cursor-alias text font-bold text-ellipsis overflow-hidden whitespace-nowrap"
                title={task.taskValue}
              >
                {task.taskValue.length > 25
                  ? `${task.taskValue.slice(0, 25)}...`
                  : task.taskValue}
              </p>
              <div className="flex justify-evenly items-center gap-2">
                <div>
                  <small
                    className="text-ellipsis overflow-hidden cursor-alias"
                    title="Due Date"
                  >
                    {task.dateValue}
                  </small>
                  <small className="text-ellipsis opacity-[0.5] text-green-700">
                    |
                  </small>
                  <small
                    className="text-ellipsis overflow-hidden cursor-alias"
                    title="Task Priority"
                  >
                    {taskPriority[task.priorityValue]}
                  </small>
                  <small className="text-ellipsis opacity-[0.5] text-green-700">
                    |
                  </small>
                  <small
                    className="text-ellipsis overflow-hidden cursor-alias"
                    title="Current State of Task"
                  >
                    {taskStatus[task.statusValue]}
                  </small>
                </div>
              </div>
              <hr className="border-[1px] border-green-700/30" />
              <div className="flex justify-around items-center gap-4">
                <a href="#inputForm">
                  <FaEdit
                    title="Edit"
                    className="hover:text-green-700 active:text-green-500 cursor-pointer"
                    onClick={() => {
                      handleEditTask(task.id);
                    }}
                  />
                </a>
                <span className="text-green-700 opacity-[0.5]">|</span>
                <FaTrash
                  title="Delete"
                  className="hover:text-green-700 active:text-green-500 cursor-pointer"
                  onClick={() => {
                    handleDeleteTask(task.id);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-400 font-bold w-full text-center">
          No Task Found
        </p>
      )}
    </section>
  );
};

export default TasksContainer;
