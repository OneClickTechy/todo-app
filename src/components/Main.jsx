import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskSearch from "./TaskSearch";
import TasksContainer from "./TasksContainer";
import fetchData from "./fetchData";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [priorityValue, setPriorityValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(undefined);

  const API_URL = "http://localhost:3500/tasks";

  const taskPriority = {
    low: "🟢 Low", // Green circle for low priority
    medium: "🟡 Medium", // Yellow circle for medium priority
    high: "🔴 High", // Red circle for high priority
    critical: "⚠️ Critical", // Warning sign for critical priority
  };
  const taskStatus = {
    not_started: "⏳ Not Started", // Hourglass for not started
    in_progress: "🚧 In Progress", // Construction sign for in-progress
    completed: "✅ Completed", // Checkmark for completed
    on_hold: "🛑 On Hold", // Stop sign for on hold
    cancelled: "❌ Cancelled", // Cross mark for cancelled
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error("⚠️ Unable to fetch data, Try to reload the page");
        const data = response.ok && (await response.json());
        setTasks(data);
      } catch (err) {
        setError(err);
      }
    };
    (async () => await fetchData())();
  }, []);

  const handleCancel = () => {
    // Reset form
    setTaskValue("");
    setDateValue(new Date().toISOString().split("T")[0]);
    setPriorityValue("");
    setStatusValue("");
    setEditMode(false);
    setEditTaskId(null);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="grow flex flex-col gap-4 justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
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
          if (!taskValue || !statusValue || !priorityValue) {
            alert("enter task in taskfield");
            return;
          }
          if (editMode) return;
          console.log("submit new task");
          const id = new Date().getTime();
          const newTask = {
            id: `${id}`,
            taskValue,
            dateValue,
            priorityValue,
            statusValue,
          };

          setTasks([...tasks, newTask]);

          const optionsObj = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(newTask),
          };
          (async () => {
            await fetchData(API_URL, optionsObj);
          })();

          setTaskValue("");
          setDateValue(new Date().toISOString().split("T")[0]);
          setPriorityValue("");
          setStatusValue("");
          console.log(tasks);
        }}
        editMode={editMode}
        editTaskId={editTaskId}
        handleTaskEdit={async () => {
          console.log("save edited task");
          if (!taskValue || !statusValue || !priorityValue) {
            alert("enter task in taskfield");
            return;
          }
          const updatedTasks = tasks.map((task) =>
            task.id === editTaskId
              ? { ...task, taskValue, dateValue, priorityValue, statusValue }
              : task
          );
          setTasks(updatedTasks);
          const editedTask = {
            id: editTaskId,
            taskValue,
            dateValue,
            priorityValue,
            statusValue,
          };
          console.log(editedTask);
          const editTaskURL = `${API_URL}/${editTaskId}`;
          console.log(editTaskURL);
          const optionsObj = {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(editedTask),
          };

          try {
            // Call fetchData with the URL and options object
            await fetchData(editTaskURL, optionsObj);
          } catch (error) {
            console.error("Error updating task:", error.message);
          }

          // Reset form
          setTaskValue("");
          setDateValue(new Date().toISOString().split("T")[0]);
          setPriorityValue("");
          setStatusValue("");
          setEditMode(false);
          setEditTaskId(null);
        }}
        handleCancel={handleCancel}
      />
      <TaskSearch
        searchValue={searchValue}
        handleSearchValue={(e) => setSearchValue(e.target.value)}
      />
      <TasksContainer
        tasks={tasks.filter((task) =>
          task.taskValue.toLowerCase().includes(searchValue.toLowerCase())
        )}
        taskPriority={taskPriority}
        taskStatus={taskStatus}
        handleDeleteTask={async (id) => {
          const newTasks = tasks.filter((task) => task.id !== id);
          setTasks(newTasks);

          const deleteTaskURL = `${API_URL}/${id}`;

          const optionsObj = {
            method: "DELETE",
          };

          try {
            await fetchData(deleteTaskURL, optionsObj);
          } catch (error) {
            setError(error.message);
          }
        }}
        handleEditTask={(id) => {
          setEditMode(true);
          setEditTaskId(id);
          const task = tasks.find((task) => task.id === id);
          console.log(task);
          setTaskValue(task.taskValue);
          setDateValue(task.dateValue);
          setPriorityValue(task.priorityValue);
          setStatusValue(task.statusValue);
        }}
      />
    </main>
  );
};

export default Main;
