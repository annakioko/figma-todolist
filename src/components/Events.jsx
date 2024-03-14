import React, { useState } from "react";
//import Checkbox from "./Checkbox";
//import Delete from "./Delete";

export default function Events() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
  };

  return (
    <div className="bg-pink-300 mr-28 mt-20 p-9 flex-row">
      <h1 className="underline text-center font-medium mb-2">Events</h1>
      <div className="flex justify-center border-white px-2 py-1 flex-col mx-2 mb-2 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>{" "}
      <div className="flex justify-center border-white px-2 py-1 flex-col mx-2 mb-2 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>{" "}
      <div className="flex justify-center border-white px-2 py-1 flex-col mx-2 mb-2 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
