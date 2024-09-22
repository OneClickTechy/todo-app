import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskSearch from "./TaskSearch";
import TasksContainer from "./TasksContainer";

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 5654654653213,
      task: "task 1",
      completed: false,
    },
    {
      id: 87494334654,
      task: "task 2",
      completed: false,
    },
    {
      id: 987496846546486,
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

  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [priorityValue, setPriorityValue] = useState("medium");
  const [statusValue, setStatusValue] = useState("not_started");

// Log tasks whenever they change
          useEffect(() => {
            console.log(tasks);
          }, [tasks]);
  return (
    <main className="grow flex flex-col gap-4 justify-center items-center w-full">
      <TaskInput
        //for task priority
        taskPriority={taskPriority}
        //for task status
        taskStatus={taskStatus}
        //for task input value
        taskValue={taskValue}
        handleTaskInput={(e) => setTaskValue(e.target.value)}
        //for date input value
        dateValue={dateValue}
        handleDateInput={(e) => setDateValue(e.target.value)}
        //for task priority
        priorityValue={priorityValue}
        handlePriorityInput={(e) => setPriorityValue(e.target.value)}
        //for task status
        statusValue={statusValue}
        handleStatusInput={(e) => setStatusValue(e.target.value)}
        //for submit button
        handleSubmit={() => {
          if (!taskValue) {
            alert("enter task in taskfield");
            return;
          }
          const id = new Date().getTime();
          const newTask = {
            id,
            taskValue,
            dateValue,
            priorityValue,
            statusValue,
          };
          

          setTasks([...tasks, newTask]);

          localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

          setTaskValue("");
          setDateValue(new Date().toISOString().split("T")[0]);
          setPriorityValue("medium");
          setStatusValue("not_started");
          console.log(tasks);
        }}
      />
      <TaskSearch />
      <TasksContainer tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default Main;
