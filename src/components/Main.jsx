import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskSearch from "./TaskSearch";
import TasksContainer from "./TasksContainer";

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "task 1",
      completed: false,
    },
    {
      id: 2,
      task: "task 2",
      completed: false,
    },
    {
      id: 3,
      task: "task 3",
      completed: false,
    },
  ]);

  const taskPriority = {
    low: "🟢 Low", // Green circle for low priority
    medium: "🟡 Medium", // Yellow circle for medium priority
    high: "🔴 High", // Red circle for high priority
    critical: "⚠️ Critical", // Warning sign for critical priority
  };
  const taskStatus = {
    not_started: "Not Started ⏳", // Hourglass for not started
    in_progress: "In Progress 🚧", // Construction sign for in-progress
    completed: "Completed ✅", // Checkmark for completed
    on_hold: "On Hold 🛑", // Stop sign for on hold
    cancelled: "Cancelled ❌", // Cross mark for cancelled
  };

  const [taskValue, setValue] = useState("");
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [priorityValue, setPriorityValue] = useState("medium");
  return (
    <main className="grow flex flex-col gap-4 justify-center items-center w-full">
      <TaskInput
        //for task priority
        taskPriority={taskPriority}
        //for task status
        taskStatus={taskStatus}
        //for task input value
        taskValue={taskValue}
        handleTaskInput={(e) => setValue(e.target.value)}
        //for date input value
        dateValue={dateValue}
        handleDateInput={(e) => setDateValue(e.target.value)}
        //for task priority
        priorityValue={priorityValue}
        //need to continue
      />
      <TaskSearch />
      <TasksContainer tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default Main;
