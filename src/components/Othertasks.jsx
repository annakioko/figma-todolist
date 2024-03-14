import React, { useState } from "react";

export default function OtherTasks() {
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
    <div className="bg-pink-300 font-medium ml-28 mt-3 p-5">
      <h1 className="text-center underline mt-2 mb-2">Other tasks</h1>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="flex justify-center mb-2">
        <form
          onSubmit={handleSubmit}
          className="border-white px-2 py-1 flex flex-col justify-between mx-2 mb-2"
        >
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
