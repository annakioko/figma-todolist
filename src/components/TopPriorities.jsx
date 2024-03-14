import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Delete from "./Delete";

export default function TopPriorities() {
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
    <div className="bg-pink-300 mx-28 mb-5">
      <h1 className="underline text-center font-medium">TopPriorities</h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
          <Checkbox />
          <Delete />
        </form>

        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
          <Checkbox />
          <Delete />
        </form>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
          <Checkbox />
          <Delete />
        </form>

        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
          <Checkbox />
          <Delete />
        </form>
      </div>
    </div>
  );
}
